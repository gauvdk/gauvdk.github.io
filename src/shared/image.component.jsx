export const ImageComponent = ({ imageName }) => {
	return <React.Fragment>
		<img src={'./img/' + imageName} className="image-parralax" />
	</React.Fragment>
}
