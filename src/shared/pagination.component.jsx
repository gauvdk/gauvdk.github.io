import { ContainerComponent } from '../shared/container.component.jsx';

export const PaginationComponent = ({ count = 1, onPageChange, setCurrentPage, currentPage }) => {

	const onPageChangeInternal = React.useCallback((a) => {
		setCurrentPage(a)
		onPageChange(a);
	}, []);

	const numbers = [];
	for (let i = 1; i <= count; i++) {
		numbers.push(<li onClick={onPageChangeInternal.bind(undefined, i)} className={currentPage === i ? 'active cyan darken-3' : 'waves-effect'}><a>{i}</a></li>)
	}

	const addNumToPage = React.useCallback((num) => {
		setCurrentPage(n => {
			const page = Math.max(1, Math.min(count, n + num));
			onPageChange(page);
			return page;
		});

	}, [count]);

	return <ContainerComponent>
		<div className="center" style={{ width: '100%', userSelect: 'none' }}>
			<ul className="pagination">
				<li onClick={addNumToPage.bind(undefined, -1)} className={currentPage === 1 ? 'disabled' : 'waves-effect'}><a><i className="material-icons">chevron_left</i></a></li>
				{numbers}
				<li onClick={addNumToPage.bind(undefined, 1)} className={currentPage === count ? 'disabled' : 'waves-effect'}><a><i className="material-icons">chevron_right</i></a></li>
			</ul>
		</div>
	</ContainerComponent>
}
