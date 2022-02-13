export const ApiService = {};

const _url = 'https://api.skimfrance.fr';

let tokenSession;

let _isAdmin = false;

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type)
		.then(a => a.json());
};

ApiService.getNumberOfPages = (type, elements) => {
	return fetch(_url + '/api/' + type + '/pages?count=' + elements).then(a => a.text()).then(Number);
}

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
	_isAdmin = token !== `${false}`;
	globalThis.setIsAdmin && globalThis.setIsAdmin(_isAdmin);
	return _isAdmin;
};

ApiService.isAdmin = () => _isAdmin;