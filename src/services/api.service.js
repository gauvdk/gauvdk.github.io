export const ApiService = {};
// 
// const _url = 'http://api.skimfrance.fr:3563';
const _url = 'https://api.skimfrance.fr';
// const _url = 'http://localhost:3563';

let tokenSession;

/**
 * @param {string} type
 */
ApiService.getAll = type => {
	return fetch(_url + '/api/' + type)
		.then(a => a.json());
};

ApiService.login = async password => {
	await axios.post(_url + '/login', { password }, {
		hearder: {
			'Access-Control-Allow-Headers': '*'
		}
	})
		.then(a => tokenSession = a.data);
	return Boolean(tokenSession);
};