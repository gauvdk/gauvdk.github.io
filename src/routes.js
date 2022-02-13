import { ContactPage } from './pages/contact.page.jsx';
import { DiscoverPage } from './pages/discover.page.jsx';
import { EventsPage } from './pages/events.page.jsx';
import { FindSpotPage } from './pages/find-spot.page.jsx';
import { HomeComponent } from './pages/home.jsx';
import { NewsPage } from './pages/news.page.jsx';
import { VideosPage } from './pages/videos.page.jsx';

/** @type {Array<import('./services/auth.service').Route>} */
export const routes = [
	{
		name: 'home',
		path: '/',
		component: HomeComponent,
	}, ,
	{
		name: 'contact',
		path: '/contact',
		component: ContactPage
	},
	{
		name: 'discover',
		path: '/discover',
		component: DiscoverPage
	},
	{
		name: 'events',
		path: '/events',
		component: EventsPage
	},
	{
		name: 'find-spot',
		path: '/find-spot',
		component: FindSpotPage
	},
	{
		name: 'news',
		path: '/news',
		component: NewsPage
	},
	{
		name: 'videos',
		path: '/videos',
		component: VideosPage
	}
];