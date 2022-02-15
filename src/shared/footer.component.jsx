import { ApiService } from "../services/api.service.js";

const { Link } = ReactRouterDOM;

const { Icon } = MaterialUI;

export const FooterComponent = () => {

	const [isAdmin, setIsAdmin] = React.useState(false);

	React.useEffect(() => {
		ApiService.isAdmin().then(setIsAdmin);
	}, []);

	globalThis.setIsAdmin = setIsAdmin;

	const disconnect = React.useCallback(() => {
		ApiService.disconnect();
	}, []);

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
				Connecté en tant qu'adminstrateur - <button onClick={disconnect}>Déconnexion</button>
			</div>}
		</div>
	</footer>
};