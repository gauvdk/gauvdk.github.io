import { ApiService } from '../services/api.service.js';
import { ImageComponent } from '../shared/image.component.jsx';

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

	React.useEffect(() => {
		ApiService.getAll('news')
			.then(a => a.slice(0, 2))
			.then(setNews);
	}, []);


	return <div className="home">
		<section>
			<ImageComponent imageName="cover_1.jpg" />
		</section>
		<section>
			<div className="news-shot">
				<div>
					<h3>News</h3>
					{news.map(a => <ShortNews key={a.id} data={a} />)}
					<Link to="/news">
						Voir plus d'infos
					</Link>
				</div>
				<div>
					<iframe src="https://www.youtube.com/embed/DikU2lxxnmo"></iframe>
				</div>
			</div>
		</section>
	</div>
};