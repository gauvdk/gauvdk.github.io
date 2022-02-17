export const DiscoverPage = () => {
	return <div className="home">

	<div className="container grey-text text-darken-2" style= {{ marginTop: '2%' }}>
		<div className="row">

			<div className="col s12 m6">
				<h4 style= {{ marginBottom: '2%' }}>Qu'est ce que le skimboard ?</h4>
				<div className="rte">
					<p style= {{ marginBottom: '5%' }}>Le skimboard est un sport de glisse qui consiste à surfer sur une vague en se lançant de la plage. Le nom vient du
					verbe anglais to skim (écumer, écrémer, frôler) et de board (planche), comme dans surfboard (planche de surf), un skimboard
					est donc littéralement une « planche à frôler/écumer » car elle plane au ras de l’eau et dans l’écume du bord.</p>
					<p>On peut dire que cette discipline est un mélange de surf et de skate. Il existe 2 types de skimboards : le flat
					(plus proche du skate) et le skimboard de vague (plus proche du surf).</p>
				 </div>
				</div>

				<div className="col s12 m6">
				 <div className="card grey darken-4">
					<div className="card-image waves-effect waves-block waves-light">
						<div className="video-container">
							<iframe src="https://www.youtube.com/embed/XX1T8z47kPE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
					<div className="card-content white-text">
						<p>Reportage sur le skimboard de Riding Zone</p>
					</div>
				</div>
			</div>

		</div>
	</div>

	<div className="container grey-text text-darken-2">
		<div className="row" style= {{ marginTop: '2%' }}>

			<div className="col s12 m6">
				<div className="card grey darken-4">
					<div className="card-image waves-effect waves-block waves-light">
						<div className="video-container">
							<iframe src="https://www.youtube.com/embed/AtX0jnHmj4c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
					<div className="card-content white-text">
						<p>Magnifique session des riders Austin Keen (Champion du monde) et Axel Cristol (Champion de France) sur un spot mythique en France (La pointe du Cap Ferret)</p>
					</div>
				</div>
			</div>

			<div className="col s12 m6">
				<h4 style= {{ marginBottom: '2%' }}>Le skimboard de vague</h4>
				<div className="rte">
					<p style= {{ marginBottom: '5%' }}>Quand on parle de skimboard, les gens ne connaissent pas,
						ou ont une image éronée de la discipline. Le skimboard, c'est surtout du surf de vague. En France cette discipline est
						régie par la fédération de surf. Contrairement aux Etats Unis, elle est beaucoup moins développée mais rassemble une
						petite communauté très familiale de skimboarders qui fait aussi tout son charme. Nous sommes toujours heureux
						d'accueillir de nouveaux pratiquants.</p>
					<p>Pour le pratiquer c'est simple, il vous faut un skimboard en résine. En France,
						 <a href="https://skimboard.com/edenv4/" style= {{ fontWeight: 'bold' }}> Eden</a> et <a href="https://www.my-dune.com/fr-FR/" style= {{ fontWeight: 'bold' }}>Dune</a> sont de très
						bonnes marques, je déconseille fortement les produits proposés par la grande distribution et made in china, souvent
						moins chers mais de bien moins bonne qualité.</p>
				</div>
			</div>

		</div>
	</div>

	<div className="container grey-text text-darken-2">
		<div className="row" style= {{ marginBottom: '2%' }}>

			<div className="col s12 m6">
				<h4 style= {{ marginBottom: '2%' }}>Le skimboard flat</h4>
				<div className="rte">
					<p style= {{ marginBottom: '5%' }}>Le skimboard "flat" se rapproche plus du skate, et se pratique sur n'importe quel plan d'eau plat, pas trop profond, 1 à 10 cm environ.
						Les "tricks" ressemblent à ceux du skate (ollie, shove it, et même des flips). Des "ramps" peuvent être utilisées pour aller plus loin.</p>
					<p>En France, l'association <a href="https://www.skim-evolution.com/" style= {{ fontWeight: 'bold' }}>Skim Evolution</a> ou <a href="https://maunakea.fr/" style= {{ fontWeight: 'bold' }}>Mauna Kea</a> proposent pendant tout l'été des initiations au skimboard sur leur skim park.
						C'est un excellent moyen de découvrir le skimboard, même si vous voulez ensuite vous diriger vers le skimboard de vague.</p>
				 </div>
				</div>

				<div className="col s12 m6">
					<div className="card grey darken-4">
						<div className="card-image waves-effect waves-block waves-light">
							<div className="video-container">
								<iframe src="https://www.youtube.com/embed/C9cHOhSRCRU?start=60" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							</div>
						</div>
						<div className="card-content white-text">
							<p>Bonne session de flat de DB Skimboard (Référence dans le skimboard Flat)</p>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
}
