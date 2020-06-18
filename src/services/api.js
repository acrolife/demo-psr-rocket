// File: /src/services/api.js

// Build header with Basic Auth
// const btoaCustom = (str) => {
// 	Buffer.from(str, 'binary').toString('base64');
// };
const username = 'Gridsome';
const password = '4pVX KPTy lfij 2KVH ByWQ prcG';
const apiUrl =
	'https://cors-anywhere-cq.herokuapp.com/https://psr2222.creativityquarks.com/';
const headers = { 'Content-Type': 'application/json' };
headers.Authorization =
	'Basic ' +
	Buffer.from(username + ':' + password, 'binary').toString('base64');
// headers.Authorization = 'Basic ' + btoaCustom(username + ':' + password);
// headers.Authorization = 'Basic ' + btoa(username + ':' + password);

export const postReview = (title, fields, status) => {
	console.log('FromPSR GS site/Admin, sent pre-review object to backend:');
	console.log(JSON.stringify({ title, fields, status }));
	console.log('Waiting backend answer, hopefully 201 !');

	return fetch(`${apiUrl}/wp-json/wp/v2/review`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ title, fields, status }),
	});
};

export const patchReview = (title, fields, id) => {	
		console.log('From PSR GS site/guest, for review, sent review object to backend:');
		console.log(JSON.stringify({ title, fields, id}));
		console.log('Waiting backend answer, hopefully 201 !');

		return fetch(`${apiUrl}/wp-json/wp/v2/review/${id}`, {
			method: 'PATCH',
			headers,
			body: JSON.stringify({ title, fields}),
		});

};
