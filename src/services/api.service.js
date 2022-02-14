export const ApiService = {};

const _url = 'https://api.skimfrance.fr';

const json = out => out.json();

fetch(_url + '/login', {
	credentials: 'include',
});

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type, {
		credentials: 'include',
	}).then(json);
};

ApiService.getNumberOfPages = (type, elements) => {
	return fetch(_url + '/api/' + type + '/pages?count=' + elements).then(a => a.text()).then(Number);
}

ApiService.login = async password => {
	const out = await fetch(_url + '/login', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({
			password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(json);
	globalThis.setIsAdmin && globalThis.setIsAdmin(out);
	return out;
};

ApiService.isAdmin = () => fetch(_url + '/login', {
	credentials: 'include'
}).then(json);

ApiService.isAdmin();