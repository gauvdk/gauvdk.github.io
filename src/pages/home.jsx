import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';

const { Link } = ReactRouterDOM;

const ShortNews = ({ data }) => {
	return <li>
		<a href={data.url} target='_blank'>
			<span class="date">{data.dateTitre}</span>
			<h3>{data.titre}</h3>
			<p className="grey-text text-darken-1">{data.description}</p>
		</a>
	</li>

	{/*<div>
		<p>{data.dateTitre}</p>
		<h5>{data.titre}</h5>
		<p>{data.description}</p>
	</div>*/}
};

export const HomeComponent = () => {

	const [news, setNews] = React.useState([]);
	const [news2, setNews2] = React.useState([]);
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		ApiService.getAll('news')
			.then(a => a.slice(0, 2))
			.then(list => list.map(a => <ShortNews key={a.id} data={a} />))
			.then(setNews);

		ApiService.getAll('news')
			.then(a => a.slice(2, 4))
			.then(list => list.map(a => <ShortNews key={a.id} data={a} />))
			.then(setNews2);

		ApiService.getAll('videos')
			.then(a => a.slice(0, 3))
			.then(list => list.map((a, i) => <div className={i === 1 ? 'not-on-tablet' : (i ? 'not-on-phone' : '')}>
				<iframe src={a.url} style={{ border: 'none' }}></iframe>
				{a.auteur} - {a.titre}
			</div>))
			.then(setVideos);
	}, []);

	return <div className="home">
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col s12 m6" style= {{ marginBottom: '3%' }}>
						<div className="news2" style= {{ marginBottom: '3%' }}>
							<h3 id="news2" className="grey-text text-darken-2">L'actualitée Skim en France</h3>
								<ul>
								{news}
								</ul>
						</div>
						<Link to="/news" className="cyan-text text-darken-3" style= {{ fontWeight: 'bold' }}>
							Voir plus d'actus <i class="material-icons transparent"
							style= {{ position: 'absolute' }}>chevron_right</i>
						</Link>
					</div>

					<div className="col s12 m6">
					{/*<div className="news2" style= {{ marginBottom: '3%' }}>
						<h3 id="news2" className="transparent-text">news</h3>
							<ul>
							{news2}
							</ul>

					</div>*/}
						<div className="card grey darken-4" style= {{ marginTop: 'auto' }}>
		 					<div className="card-image waves-effect waves-block waves-light" style= {{ height: 'auto' }}>
		 						<img src={'./img/news_1.jpg'}/>
		 					</div>
		 				</div>
					</div>
				</div>
			</div>
		</div>

		{/*<ContainerComponent className='news-shot'>
			<div>
				<h3>News</h3>
				{news}
				<Link to="/news" className="cyan-text text-darken-3" style= {{ fontWeight: 'bold' }}>
					Voir plus d'actus <i class="material-icons transparent"
					style= {{ position: 'absolute' }}>chevron_right</i>
				</Link>
			</div>
			<div className="not-on-phone" style={{ width: '100em' }}>
				<iframe src="https://www.youtube.com/embed/DikU2lxxnmo"></iframe>
			</div>
		</ContainerComponent>*/}


		{/*<section className="grey darken-1">
			<div className="skim-container white-text">
				<h3>Dernière<span className="not-on-phone">s</span> vidéo<span className="not-on-phone">s</span> de Skim Français</h3>
			</div>
		</section>
		<section className="grey darken-1">
			<div className="skim-container center videos-shot white-text">
				{videos}
			</div>
		</section>
		<section className="grey darken-1">
			<div className="skim-container">
				<a href="/videos" className="cyan-text text-darken-3" style= {{ fontWeight: 'bold' }}>
					Voir plus de vidéos <i class="material-icons transparent"
					style= {{ position: 'absolute' }}>chevron_right</i>
				</a>
			</div>
		</section>*/}

		<ContainerComponent invert={true}>
			<h3>Dernière<span className="not-on-phone">s</span> vidéo<span className="not-on-phone">s</span> de Skim Français</h3>
		</ContainerComponent>
		<ContainerComponent invert={true} className="center videos-shot">
			{videos}
		</ContainerComponent>
		<ContainerComponent invert={true} className="center">
			<Link to="/videos" className="cyan-text text-darken-3" style= {{ fontWeight: 'bold' }}>
				Voir plus de vidéos <i class="material-icons transparent" style= {{ position: 'absolute' }}>chevron_right</i>
			</Link>
		</ContainerComponent>
		{/*<ContainerComponent>
			<h3>Tu souhaites découvrir le skim ?</h3>
		</ContainerComponent>
		<ContainerComponent>
			<div>
				Tu trouveras plus d'infos en cliquant <Link to="/discover">
					ici
				</Link>, n'hésite pas à parcourir le site à la recherche de glisse !

			</div>
		</ContainerComponent>*/}
	</div>
};
