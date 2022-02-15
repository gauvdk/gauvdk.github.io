import { ApiService } from '../services/api.service.js';
import { ContainerComponent } from '../shared/container.component.jsx';

const { Redirect } = ReactRouterDOM;

export const AdminPage = () => {

	const [valuePassword, setValuePassword] = React.useState();
	const [errorMessage, setErrorMessage] = React.useState();
	const [waitForLogin, setWaitForLogin] = React.useState();

	const onChangePassword = React.useCallback((e) => {
		setValuePassword(e.target.value)
		e.preventDefault();
	}, []);

	const isValidPassword = React.useCallback(() => {
		return valuePassword && valuePassword.length > 5;
	}, [valuePassword]);

	const onValidate = React.useCallback(async () => {
		setWaitForLogin(true);
		const out = await ApiService.login(valuePassword);
		setWaitForLogin(false);
		if (out) {
			setErrorMessage(out);
		} else {
			setErrorMessage(new Date().toLocaleString() + ' : Mot de passe incorrect');
		}
	}, [valuePassword]);

	React.useEffect(() => {
		ApiService.isAdmin().then(out => {
			if (out) {
				setErrorMessage(out);
			}
		})
	}, []);

	if (typeof errorMessage === 'boolean') {
		return <React.Fragment>
			<Redirect to="/" />
		</React.Fragment>
	}

	return <div className="home">
		<ContainerComponent>
			<div className="input-field col s12" style={{ width: '100%' }}>
				<input id="password" type="password" class="validate" value={valuePassword} onChange={onChangePassword} />
				<label for="password">Password</label>
			</div>
		</ContainerComponent>
		<ContainerComponent>
			<a className="waves-effect waves-light btn" disabled={waitForLogin || !isValidPassword()} onClick={onValidate}>
				<i className="material-icons left">cloud</i>
				Connexion
			</a>
		</ContainerComponent>
		{errorMessage && <ContainerComponent className="error-message">
			{errorMessage}
		</ContainerComponent>}
	</div>
};
