import { ImageComponent } from "./image.component.jsx";

const { Link } = ReactRouterDOM;

const SidenavLink = ({ iconName, label, url, onClick }) => {
	return <React.Fragment>
		<li>
			<Link to={'/' + url} className="className" onClick={onClick}>
				<i className="material-icons">{iconName}</i>
				{label}
			</Link>
		</li>
		<li><div className="divider"></div></li>
	</React.Fragment>
};

export const SideNavComponent = () => {

	const refSideNav = React.createRef();

	const [instanceMaterialize, setInstanceMaterialize] = React.useState();
	const [links, setLinks] = React.useState([]);

	React.useEffect(() => {
		M.Sidenav.init(refSideNav.current);
		setInstanceMaterialize(M.Sidenav.getInstance(refSideNav.current));
	}, []);

	React.useEffect(() => {
		setLinks([
			{
				url: 'news',
				iconName: 'new_releases',
				label: 'News',
			},
			{
				url: 'videos',
				iconName: 'videocam',
				label: 'Vidéos',
			},
			{
				url: 'find-spot',
				iconName: 'place',
				label: 'Trouver un spot',
			},
			{
				url: 'discover',
				iconName: 'search',
				label: 'Découvrir le skim',
			},
			{
				url: 'events',
				iconName: 'flash_on',
				label: 'Les events',
			},
			{
				url: 'contact',
				iconName: 'contacts',
				label: 'Contact',
			},
		].map(e => <SidenavLink key={e.url} iconName={e.iconName} label={e.label} url={e.url} onClick={closeSideNav} />))
	}, []);

	const openSideNav = React.useCallback(() => {
		instanceMaterialize.open();
	}, [instanceMaterialize]);

	const closeSideNav = React.useCallback(() => {
		// instanceMaterialize.close();
	}, [instanceMaterialize]);


	return <div>
		<div onClick={openSideNav} className="element-button-nav">
			<ImageComponent imageName="menu.png" />
			<div>Menu</div>
		</div>

		<div className="button-side-nav">
			<ul id="slide-out" className="sidenav" ref={refSideNav}>
				<li>
					<div className="user-view">
						<Link to="/">
							<ImageComponent imageName="cover_3.png" />
						</Link>
					</div>
				</li>
				<li><div className="divider"></div></li>
				{links}
			</ul>

		</div>
	</div>

};