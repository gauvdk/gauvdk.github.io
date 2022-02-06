export const ApiService = {};

const _url = 'http://skim.trackoad.com:3563';

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type)
		.then(a => a.json());
};