import { ImageComponent } from "./image.component.jsx";

export const CoverComponent = () => {

	const [currentRoute, setCurrentRoute] = React.useState('/');

	const classes = [
		'cover',
		currentRoute.replace('/', '') ? 'sub-cover' : '',
	].filter(a => a);

	React.useEffect(() => {

		globalThis.onChangeRoute = setCurrentRoute;

		return () => {
			globalThis.onChangeRoute = undefined;
		}
	}, []);

	console.log('render');

	return <section className={classes.join(' ')}>
		<ImageComponent imageName="cover_1.jpg" />
	</section>
};