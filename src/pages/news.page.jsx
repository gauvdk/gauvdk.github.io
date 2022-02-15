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

	return <div>
		<h4>
			<EditComponent obj={newsElement} keyObj='titre' type='news' refresh={refreshNews} isAdmin={isAdmin} />
			{isAdmin && 'id' in newsElement && <i className="material-icons right" onClick={deleteNews}>delete</i>}
		</h4>
		<strong><EditComponent obj={newsElement} keyObj='dateTitre' type='news' refresh={refreshNews} isAdmin={isAdmin} /></strong>
		<p><EditComponent obj={newsElement} keyObj='description' type='news' refresh={refreshNews} isAdmin={isAdmin} /></p>
		{'id' in newsElement && <a href={newsElement.url} target='_blank'>Lien de l'article</a>}
		{isAdmin && <p>(<EditComponent obj={newsElement} keyObj='url' type='news' refresh={refreshNews} isAdmin={isAdmin} setState={setState} />)</p>}

	</div>
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

	return <div className="home">
		<ContainerComponent>
			<h3>Liste des dernières news</h3>
		</ContainerComponent>
		{news}
		<PaginationComponent count={countPages} onPageChange={onPageChange} currentPage={currentPage} setCurrentPage={setCurrentPage} />
	</div>
}