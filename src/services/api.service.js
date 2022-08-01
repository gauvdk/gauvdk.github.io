export const ApiService = {};

const _url = 'https://api-skimfrance-flqdlklglq-uc.a.run.app';

const json = out => out.json();

fetch(_url + '/login', {
	credentials: 'include',
});

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type).then(json);
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

ApiService.disconnect = () => void fetch(_url + '/disconnect', {
	method: 'POST',
	credentials: 'include'
}).then(a => {
	if (a.status === 200) {
		location.reload();
	}
});

ApiService.isAdmin = () => fetch(_url + '/login', {
	credentials: 'include'
}).then(json);

ApiService.saveType = async (type, obj) => {
	await fetch(_url + '/api/' + type, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

ApiService.deleteType = async (type, obj) => {
	await fetch(_url + '/api/' + type, {
		method: 'DELETE',
		credentials: 'include',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};