import { getRoutes } from '../services/auth.service.js';
import { CoverComponent } from './cover.component.jsx';
import { FooterComponent } from './footer.component.jsx';
import { SideNavComponent } from './sidenav.component.jsx';

const { Route, BrowserRouter, Switch } = ReactRouterDOM;

const DefaultParentComponent = ({ children }) => {
	return <React.Fragment>
		{children}
	</React.Fragment>
}

const RouteGeneric = ({ component: Component, roles, path, parentComponent }) => {
	roles = roles || [];
	const ParentComponent = parentComponent || DefaultParentComponent;

	return (
		<Route
			path={path}
			exact={true}
			render={(props) => {
				globalThis.onChangeRoute && globalThis.onChangeRoute(path);
				return <ParentComponent>
					<Component {...props} />
				</ParentComponent>
			}
			}
		/>
	);
}

export const AuthComponent = () => {
	return (
		<BrowserRouter>
			<SideNavComponent />
			<CoverComponent />
			<Switch>
				{
					getRoutes().map((route, index) => {
						return <RouteGeneric exact {...route} key={index} />
					})
				}
			</Switch>
			<FooterComponent />
		</BrowserRouter>
	);
}