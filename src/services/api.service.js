export const ApiService = {};

const _url = 'https://api.skimfrance.fr';

let tokenSession;

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type)
		.then(a => a.json());
};

ApiService.login = async password => {
	const token = await fetch(_url + '/login', {
		method: 'POST',
		body: JSON.stringify({
			password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(o => o.text());

	tokenSession = token;
	return token !== `${false}`;
};