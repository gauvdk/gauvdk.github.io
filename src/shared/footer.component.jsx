import { ApiService } from "../services/api.service.js";

const { Link } = ReactRouterDOM;

const { Icon } = MaterialUI;

export const FooterComponent = () => {

	const [isAdmin, setIsAdmin] = React.useState(false);

	React.useEffect(() => {
		ApiService.isAdmin().then(setIsAdmin);
	}, []);

	globalThis.setIsAdmin = setIsAdmin;

	return <footer>
		<div>
			<Link to="/">
				<Icon color="info" style={{ color: 'white' }}>facebook</Icon>
			</Link>
			<Icon>sports</Icon>
			<Icon>star</Icon>
			<div>
				© Gauthier Vandekerckhove - Tous droits réservés
			</div>
			{isAdmin && <div className="error-message">
				Connecté en tant qu'adminstrateur
			</div>}
		</div>
	</footer>
};