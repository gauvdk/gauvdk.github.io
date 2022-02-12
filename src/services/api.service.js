export const ApiService = {};

const _url = 'https://api.skimfrance.fr';

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type)
		.then(a => a.json());
};