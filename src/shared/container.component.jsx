export const ContainerComponent = ({ children, invert, className = '' }) => {

	return <section className={invert ? 'invert' : ''}>
		<div className={'skim-container ' + className}>
			{children}
		</div>
	</section>
};