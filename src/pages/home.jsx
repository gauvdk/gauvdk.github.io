import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';

const { Link } = ReactRouterDOM;

const ShortNews = ({ data }) => {
	return <div>
		<p>{data.dateTitre}</p>
		<h5>{data.titre}</h5>
		<p>{data.description}</p>
	</div>
};

export const HomeComponent = () => {

	const [news, setNews] = React.useState([]);
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		ApiService.getAll('news')
			.then(a => a.slice(0, 2))
			.then(list => list.map(a => <ShortNews key={a.id} data={a} />))
			.then(setNews);

		ApiService.getAll('videos')
			.then(a => a.slice(0, 3))
			.then(list => list.map((a, i) => <div className={i === 1 ? 'not-on-tablet' : (i ? 'not-on-phone' : '')}>
				<iframe src={a.url} style={{ border: 'none' }}></iframe>
				{a.auteur} - {a.titre}
			</div>))
			.then(setVideos);
	}, []);

	return <div className="home">
		<ContainerComponent className='news-shot'>
			<div>
				<h3>News</h3>
				{news}
				<Link to="/news">
					Voir plus d'infos
				</Link>
			</div>
			<div className="not-on-phone" style={{ width: '100em' }}>
				<iframe src="https://www.youtube.com/embed/DikU2lxxnmo"></iframe>
			</div>
		</ContainerComponent>
		<ContainerComponent invert={true}>
			<h3>Dernière<span className="not-on-phone">s</span> vidéo<span className="not-on-phone">s</span> de Skim Français</h3>
		</ContainerComponent>
		<ContainerComponent invert={true} className="center videos-shot">
			{videos}
		</ContainerComponent>
		<ContainerComponent invert={true} className="center">
			<Link to="/videos">
				Voir plus de vidéos
			</Link>
		</ContainerComponent>
		<ContainerComponent>
			<h3>Tu souhaites découvrir le skim ?</h3>
		</ContainerComponent>
		<ContainerComponent>
			<div>
				Tu trouveras plus d'infos en cliquant <Link to="/discover">
					ici
				</Link>, n'hésite pas à parcourir le site à la recherche de glisse !

			</div>
		</ContainerComponent>
	</div>
};
