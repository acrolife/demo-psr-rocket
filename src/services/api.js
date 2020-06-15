// File: /src/services/api.js

// Build header with Basic Auth
const btoaCustom = (str) => {
	Buffer.from(str, 'binary').toString('base64');
};
const username = 'Gridsome';
const password = '4pVX KPTy lfij 2KVH ByWQ prcG';
const apiUrl =
	'https://cors-anywhere-cq.herokuapp.com/https://psr2222.creativityquarks.com/';
const headers = { 'Content-Type': 'application/json' };
headers.Authorization = 'Basic ' + Buffer.from(username + ':' + password, 'binary').toString('base64');
// headers.Authorization = 'Basic ' + btoaCustom(username + ':' + password);
// headers.Authorization = 'Basic ' + btoa(username + ':' + password);

export const sendReview = (title, fields) => {
	console.log('From send review, sent this object to backend:');
	console.log(JSON.stringify({ title, fields }));
	console.log('Waiting backend answer, hopefully 201 !');

	return fetch(`${apiUrl}/wp-json/wp/v2/review`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ title, fields }),
	});

	// .then((response) => {
	// 	console.log(response.json());
	// 	if (response.status === 201) {
	// 		$router.push({ path: '/success/' });
	// 	}
	// });
};
