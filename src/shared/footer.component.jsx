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
		<div className="social-icons">
			<a href="#">
				<i style= {{ margin: '1%' }} className="white-text fa-brands fa-facebook-square fa-2xl"></i>
			</a>
			<a href="https://www.instagram.com/skimfrance/" target="_blank">
				<i style= {{ margin: '1%' }} className="white-text fa-brands fa-instagram fa-2xl"></i>
			</a>
			<a href="https://discord.gg/dJMNeSRrYr" target="_blank">
				<i style= {{ margin: '1%' }} className="white-text fa-brands fa-discord fa-2xl"></i>
			</a>
			<div>
				© Cyril Besse & Gauthier Vandekerckhove - Tous droits réservés
			</div>
			{isAdmin && <div className="error-message">
				Connecté en tant qu'adminstrateur - <button onClick={disconnect}>Déconnexion</button>
			</div>}
		</div>
	</footer>
};
