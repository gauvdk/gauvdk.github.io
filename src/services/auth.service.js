
/** @typedef {{
	name: string,
	path: string,
	component?: React.AbstractComponent<any>,
	roles?: Roles | Roles[],
	routes?: Route[],
 }} Route */

/** @typedef { 'ROLE_USER' | 'ROLE_GAME' } Roles */

import { routes } from "../routes.js";

/** @type {Array<Roles>} */
const _roles = [];

/**
 * @param {Array<Roles>} roles
 */
export const hasRoles = (roles) => {
	return !roles.length || !roles.find(role => !_roles.includes(role));
};

export const isAuth = () => {
	return _roles.includes('ROLE_USER');
};

/**
 * @param {Roles} role
 */
export const addRole = (role) => {
	if (!_roles.includes(role)) {
		_roles.push(role);
	}
};

/**
 * @param {Roles} role
 */
export const deleteRole = role => {
	if (_roles.includes(role)) {
		_roles.splice(_roles.indexOf(role), 1);
	}
}

export const AuthService = {
	needPreshoot: true,
};

/**
 * @param {Route} parentRoute
 * @param {Array<Route>} subRoutes
 * @returns {Array<Route>}
 */
const compile = (parentRoute, subRoutes, parentComponent = undefined) => {
	return subRoutes.flatMap(subRoute => {
		if (typeof subRoute.roles === 'string' && !(subRoute.roles instanceof Array)) {
			subRoute.roles = [subRoute.roles];
		}
		/** @type {Route} */
		const newRoute = {
			'name': subRoute.name,
			'path': parentRoute.path + subRoute.path,
			'component': subRoute.component,
			'roles': (parentRoute.roles || []).concat((subRoute.roles || [])),
			parentComponent,
		};
		return (subRoute.routes) ? [...compile(newRoute, subRoute.routes, subRoute.component)] : newRoute;
	});
}

export const getRoutes = () => {
	/** @type {Route} */
	const parentRoute = {
		'name': '',
		'path': '',
	};
	const flatRoutes = compile(parentRoute, routes);
	return flatRoutes;
}

// if (EnvService.isInDevMod()) {
// 	addRole('ROLE_GAME');
// }