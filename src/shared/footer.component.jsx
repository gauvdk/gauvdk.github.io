const { Link } = ReactRouterDOM;

const { Icon } = MaterialUI;

export const FooterComponent = () => {
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
		</div>
	</footer>
};