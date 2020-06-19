// File: /src/services/api.js

// Build header with Basic Auth
// const btoaCustom = (str) => {
// 	Buffer.from(str, 'binary').toString('base64');
// };

// Prepare authentication for WP REST API and PSR-mail API
const username = 'Gridsome';
const password = '4pVX KPTy lfij 2KVH ByWQ prcG';
const wpApiUrl =
	'https://cors-anywhere-cq.herokuapp.com/https://psr2222.creativityquarks.com/';
const psrmailApiUrl =
	'https://cors-anywhere-cq.herokuapp.com/https://psrmail-api.herokuapp.com/';

const headers = { 'Content-Type': 'application/json' };
headers.Authorization =
	'Basic ' +
	Buffer.from(username + ':' + password, 'binary').toString('base64');
// headers.Authorization = 'Basic ' + btoaCustom(username + ':' + password);
// headers.Authorization = 'Basic ' + btoa(username + ':' + password);

// WP REST API calls
export const getReviews = () => {
	console.log('FromPSR GS site/Admin, getting review object to backend:');
	console.log(`Calling api on ${wpApiUrl}/wp-json/wp/v2/review`);
	console.log('Waiting backend answer, hopefully 200 !');
	return fetch(`${wpApiUrl}/wp-json/wp/v2/review`)
	.then((res) => res.json());
};

export const postReview = (title, fields, status) => {
	console.log('FromPSR GS site/Admin, sending pre-review object to backend:');
	console.log(`Calling api on ${wpApiUrl}/wp-json/wp/v2/review`);
	console.log(JSON.stringify({ title, fields, status }));
	console.log('Waiting backend answer, hopefully 201 !');

	return fetch(`${wpApiUrl}/wp-json/wp/v2/review`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ title, fields, status }),
	})
};

export const patchReview = (title, fields, id) => {
	console.log(
		'From PSR GS site/guest, for review, sending review object to backend:'
	);
	console.log(`Calling api on ${wpApiUrl}/wp-json/wp/v2/review/${id}`);
	console.log(`The review "${title}" will be sent to backend.`);
	// console.log(JSON.stringify({ title, fields, id }));
	console.log('Waiting backend answer, hopefully 200 !');

	return fetch(`${wpApiUrl}/wp-json/wp/v2/review/${id}`, {
		method: 'PATCH',
		headers,
		body: JSON.stringify({ title, fields }),
	});
};

// Custom backend calls to use mailjet
// const formData = {
// 	name: 'Gilbert',
// 	guestTitle: 'Monsieur',
// 	relation: 'client',
// 	structure: 'particulier',
// 	token: 'dslkdnqkfnqskf89273',
// 	email: 'david.dedobbeleer@gmail.com',
// };
const invitationData = {
	// review: 'Test message from GS Heroku',
	invitationTitle: 'Invitation à déposer un avis sur le site de PS-Rénovation',
	invitationMsgBody:
		"Vous avez fait confiance à PS-Rénovation lors de travaux réalisés récemment dans votre bâtiment. Voudriez-vous nous accorder environ 6 minutes de votre temps que nous savons précieux, afin d'écrire un avis et laisser une évaluation ?",
	invitationThanks:
		"Merci par avance, grâce à vous d'autres particuliers et entreprises sauront qu'il peuvent compter sur nous pour la rénovation de leur bien!",
	invitationLink: 'https://demo-psr-rocket.netlify.app/votre-avis-compte',
};

export const sendEmail = (formData) => {
	// export const sendEmail = (messageClient, email) => {
	console.log(
		'From GS api.js: ' +
			JSON.stringify({formData, invitationData})
	);
	return fetch(`${psrmailApiUrl}/api/send_email`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({formData, invitationData}),
	})
	//  .then((res) => console.log(res)) // can't add it if used on the componennt siide as .then()	
};