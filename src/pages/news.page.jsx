import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';
import { PaginationComponent } from '../shared/pagination.component.jsx';

const ELEMENTS_BY_PAGE = 2;

const NewsPageElement = ({ newsElement }) => {
	return <div>
		<h4>{newsElement.titre}</h4>
		<strong>{newsElement.dateTitre}</strong>
		<p>{newsElement.description}</p>
		<a href={newsElement.url}>Lien de l'article</a>
	</div>
}

export const NewsPage = () => {

	const [news, setNews] = React.useState([]);
	const [countPages, setCountPages] = React.useState(1);
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		ApiService.getNumberOfPages('news', ELEMENTS_BY_PAGE).then(setCountPages).then(() => refreshNews(currentPage));
	}, []);

	const refreshNews = React.useCallback(async (page) => {
		const list = await ApiService.getAll(`news?page=${page}&count=${ELEMENTS_BY_PAGE}`);
		setNews(list.map(element => <ContainerComponent>
			<NewsPageElement newsElement={element} />
		</ContainerComponent>));
	}, []);

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