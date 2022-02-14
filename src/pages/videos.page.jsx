import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';
import { PaginationComponent } from '../shared/pagination.component.jsx';

const VideoPageElement = ({ videoElement, className = '' }) => {
	return <div className={"card grey darken-4 videos-list " + className} style={{ width: '100em' }}>
		<div className="card-image waves-effect waves-block waves-light">
			<div className="video-container">
				<iframe src={videoElement.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
			</div>
		</div>
		<div className="card-content white-text">
			<p>{videoElement.auteur} - {videoElement.titre}</p>
		</div>
	</div>
};

const ELEMENTS_BY_PAGE = 3;

export const VideosPage = () => {

	const [videos, setVideos] = React.useState([]);
	const [countPages, setCountPages] = React.useState(1);
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		ApiService.getNumberOfPages('videos', ELEMENTS_BY_PAGE).then(setCountPages).then(() => refreshVideos(currentPage));
	}, []);

	const refreshVideos = React.useCallback(async (page) => {
		const list = await ApiService.getAll(`videos?page=${page}&count=${ELEMENTS_BY_PAGE}`);
		const out = [];
		let temp = [];
		list.forEach((element, index) => {
			temp.push(<VideoPageElement videoElement={element} className={index % 2 ? 'not-on-phone' : ''} />)
			if (temp.length === 2) {
				out.push(<React.Fragment>
					<ContainerComponent>
						{temp.concat([])}
					</ContainerComponent>
					<ContainerComponent className='only-on-phone'>
						<VideoPageElement videoElement={element} />
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