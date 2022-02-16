import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';
import { EditComponent } from '../shared/edit.component.jsx';
import { PaginationComponent } from '../shared/pagination.component.jsx';

const VideoPageElement = ({ videoElement, refreshVideos, isAdmin, className = '' }) => {

	const [zz, setState] = React.useState();

	const deleteVideo = React.useCallback(() => {
		ApiService.deleteType('videos', videoElement).then(refreshVideos);
	}, []);

	return <div className={"card grey darken-4 videos-list " + className} style={{ width: '100em' }}>
		<div className="card-image waves-effect waves-block waves-light">
			<div className="video-container">
				<iframe src={videoElement.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
			</div>
		</div>
		<div className="card-content white-text">

			<p>
				<EditComponent obj={videoElement} keyObj='auteur' type='videos' refresh={refreshVideos} isAdmin={isAdmin} />
				{' - '}
				<EditComponent obj={videoElement} keyObj='titre' type='videos' refresh={refreshVideos} isAdmin={isAdmin} />
				{isAdmin && 'id' in videoElement && <i className="material-icons right" onDoubleClick={deleteVideo}>delete</i>}</p>
		</div>
		{
			isAdmin && <div className="card-content white-text">
				<p>(<EditComponent obj={videoElement} keyObj='url' type='videos' refresh={refreshVideos} isAdmin={isAdmin} setState={setState} />)</p>
			</div>
		}
	</div>
};

const ELEMENTS_BY_PAGE = 3;

export const VideosPage = () => {

	const [videos, setVideos] = React.useState([]);
	const [countPages, setCountPages] = React.useState(1);
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		ApiService.getNumberOfPages('videos', ELEMENTS_BY_PAGE).then(async a => {
			if (await ApiService.isAdmin()) {
				a++;
			}
			setCountPages(a);
		}).then(() => refreshVideos(currentPage));
	}, []);

	const refreshVideos = React.useCallback(async (page) => {
		const [list, isAdmin] = await Promise.all([ApiService.getAll(`videos?page=${page}&count=${ELEMENTS_BY_PAGE}`), ApiService.isAdmin()]);
		if (isAdmin && !list.length) {
			list.push({
				auteur: "Auteur",
				titre: "Titre",
				description: "Description",
				url: "https://www.youtube.com/embed/JLO4IoWCk-8",
			});
		}
		const out = [];
		let temp = [];
		list.forEach((element, index) => {
			temp.push(<VideoPageElement refreshVideos={refreshVideos.bind(undefined, page)} isAdmin={isAdmin} videoElement={element} className={index % 2 ? 'not-on-phone' : ''} />)
			if (temp.length === 2) {
				out.push(<React.Fragment>
					<ContainerComponent>
						{temp.concat([])}
					</ContainerComponent>
					<ContainerComponent className='only-on-phone'>
						<VideoPageElement refreshVideos={refreshVideos.bind(undefined, page)} isAdmin={isAdmin} videoElement={element} />
					</ContainerComponent>
				</React.Fragment>);
				temp = [];
			}
		});
		if (temp.length) {
			out.push(<React.Fragment>
				<ContainerComponent>
					{temp.concat([])}
				</ContainerComponent>
			</React.Fragment>);
		}
		setVideos([]);
		setVideos(out);
	}, []);

	const onPageChange = React.useCallback((page) => {
		setCurrentPage(page);
		refreshVideos(page);
	}, []);

	return <div className="home">
		<ContainerComponent>
			<h3>Liste des dernières vidéos</h3>
		</ContainerComponent>
		{videos}
		<PaginationComponent count={countPages} onPageChange={onPageChange} currentPage={currentPage} setCurrentPage={setCurrentPage} />
	</div>
}