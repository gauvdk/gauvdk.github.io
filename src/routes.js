import { HomeComponent } from './pages/home.jsx';

/** @type {Array<import('./services/auth.service').Route>} */
export const routes = [
	{
		name: 'home',
		path: '/',
		component: HomeComponent,
	},
];