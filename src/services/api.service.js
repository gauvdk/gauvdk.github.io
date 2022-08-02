export const ApiService = {};

const _url = 'https://api-skimfrance-flqdlklglq-uc.a.run.app';

const json = out => out.json();

const getJSessionId = () => {
    return JSON.parse(document.cookie || '{}').SESSIONID || '';
}

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
		body: JSON.stringify({
			password,
		}),
		headers: {
			'Content-Type': 'application/json',
			'session-id': getJSessionId(),
		}
	}).then(json);
	globalThis.setIsAdmin && globalThis.setIsAdmin(out);
	return out;
};

ApiService.disconnect = () => void fetch(_url + '/disconnect', {
	method: 'POST',
	headers: {
		'session-id': getJSessionId(),
	},
}).then(a => {
	document.cookie = '';
	if (a.status === 200) {
		location.reload();
	}
});

ApiService.isAdmin = () => fetch(_url + '/login', {
	headers: {
		'session-id': getJSessionId(),
	}
}).then(json).then(out => {
	if(typeof out !== 'boolean') {
		document.cookie = JSON.stringify({
			SESSIONID: out.SESSIONID,
		});
		return false;
	}
	return out;
});

ApiService.saveType = async (type, obj) => {
	await fetch(_url + '/api/' + type, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json',
			'session-id': getJSessionId(),
		}
	});
};

ApiService.deleteType = async (type, obj) => {
	await fetch(_url + '/api/' + type, {
		method: 'DELETE',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json',
			'session-id': getJSessionId(),
		}
	});
};