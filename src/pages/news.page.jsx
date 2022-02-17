import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';
import { EditComponent } from '../shared/edit.component.jsx';
import { PaginationComponent } from '../shared/pagination.component.jsx';

const ELEMENTS_BY_PAGE = 2;

const NewsPageElement = ({ newsElement, refreshNews, isAdmin }) => {

	const [zz, setState] = React.useState();

	const deleteNews = React.useCallback(() => {
		ApiService.deleteType('news', newsElement).then(refreshNews);
	}, []);
	if (isAdmin) {
		return <div>
				<h4>
					<EditComponent obj={newsElement} keyObj='titre' type='news' refresh={refreshNews} isAdmin={isAdmin} />
					{isAdmin && 'id' in newsElement && <i className="material-icons right" onDoubleClick={deleteNews}>delete</i>}
				</h4>
				<strong><EditComponent obj={newsElement} keyObj='dateTitre' type='news' refresh={refreshNews} isAdmin={isAdmin} /></strong>
				<p><EditComponent obj={newsElement} keyObj='description' type='news' refresh={refreshNews} isAdmin={isAdmin} /></p>
				{'id' in newsElement && <a href={newsElement.url} target='_blank'>Lien de l'article</a>}
				{isAdmin && <p>(<EditComponent obj={newsElement} keyObj='url' type='news' refresh={refreshNews} isAdmin={isAdmin} setState={setState} />)</p>}

			</div>
	}
	{/*return <div>
			<h4>
				<EditComponent obj={newsElement} keyObj='titre' type='news' refresh={refreshNews} isAdmin={isAdmin} />
				{isAdmin && 'id' in newsElement && <i className="material-icons right" onDoubleClick={deleteNews}>delete</i>}
			</h4>
			<strong><EditComponent obj={newsElement} keyObj='dateTitre' type='news' refresh={refreshNews} isAdmin={isAdmin} /></strong>
			<p><EditComponent obj={newsElement} keyObj='description' type='news' refresh={refreshNews} isAdmin={isAdmin} /></p>
			{'id' in newsElement && <a href={newsElement.url} target='_blank'>Lien de l'article</a>}
			{isAdmin && <p>(<EditComponent obj={newsElement} keyObj='url' type='news' refresh={refreshNews} isAdmin={isAdmin} setState={setState} />)</p>}

		</div>*/}


		return <li>
		{'id' in newsElement && <a href={newsElement.url} target='_blank'>
			<span className="date"><EditComponent obj={newsElement} keyObj='dateTitre' type='news' refresh={refreshNews} isAdmin={isAdmin} /></span>
			<h3>
				<EditComponent obj={newsElement} keyObj='titre' type='news' refresh={refreshNews} isAdmin={isAdmin} />
				{isAdmin && 'id' in newsElement && <i className="material-icons right" onDoubleClick={deleteNews}>delete</i>}
			</h3>

			<p className="grey-text text-darken-1"><EditComponent obj={newsElement} keyObj='description' type='news' refresh={refreshNews} isAdmin={isAdmin} /></p>
			{'id' in newsElement && <a href={newsElement.url} target='_blank'>Lien de l'article</a>}
			{isAdmin && <p>(<EditComponent obj={newsElement} keyObj='url' type='news' refresh={refreshNews} isAdmin={isAdmin} setState={setState} />)</p>}
			</a>}
		</li>
}

export const NewsPage = () => {

	const [news, setNews] = React.useState([]);
	const [countPages, setCountPages] = React.useState(1);
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		ApiService.getNumberOfPages('news', ELEMENTS_BY_PAGE).then(async a => {
			if (await ApiService.isAdmin()) {
				a++;
			}
			setCountPages(a);
		}).then(() => refreshNews(currentPage));
	}, []);

	const refreshNews = React.useCallback(async (page) => {
		const [list, isAdmin] = await Promise.all([ApiService.getAll(`news?page=${page}&count=${ELEMENTS_BY_PAGE}`), ApiService.isAdmin()]);
		if (isAdmin && !list.length) {
			list.push({
				date: "",
				titre: "Titre nouvel article",
				dateTitre: "Date titre",
				description: "Contenu article",
				url: "URL",
			});
		}
		setNews([]);
		setNews(f => {
			// f.forEach(a => a.destroy());
			return list.map((element, i) => <ContainerComponent>
				<NewsPageElement key={i} newsElement={element} refreshNews={refreshNews.bind(undefined, page)} isAdmin={isAdmin} />
			</ContainerComponent>)
		});
	}, [news]);

	const onPageChange = React.useCallback((page) => {
		setCurrentPage(page);
		refreshNews(page);
	}, []);

	{/*return <div className="home">
			<ContainerComponent>
				<h3>Liste des dernières news</h3>
			</ContainerComponent>
			{news}
			<PaginationComponent count={countPages} onPageChange={onPageChange} currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</div>*/}

	return <div className="home">
	<div className="container" style= {{ marginTop: '5%' }}>
		<div className="row">
			<div className="col-md-6">
				<div className="news2">
					<h3 id="news2" className="grey-text text-darken-2">L'actualité Skim en France</h3>
						<ul>
						{news}
						</ul>
				</div>
				<PaginationComponent count={countPages} onPageChange={onPageChange} currentPage={currentPage} setCurrentPage={setCurrentPage} />
				</div>
				<div className="col-md-6 testimonial">
					<div className="video-container">
						<iframe src="https://www.youtube.com/embed/DikU2lxxnmo" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
}
