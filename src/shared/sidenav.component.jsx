export class SideNavComponent extends React.Component {

	constructor(props) {
		super();
		this.ref = React.createRef();
		this.instanceMaterialize = undefined;
		this.openSideNav = this.openSideNav.bind(this);
	}

	componentDidMount() {
		M.Sidenav.init(this.ref.current);
		this.instanceMaterialize = M.Sidenav.getInstance(this.ref.current);
	}

	openSideNav() {
		this.instanceMaterialize.open();
	}

	render() {
		return <div>
			<div onClick={this.openSideNav} className="element-button-nav">
				<i className="material-icons">menu</i>
			</div>

			<div className="button-side-nav">
				<ul id="slide-out" className="sidenav" ref={this.ref}>
					<li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
					<li><a href="#!">Second Link</a></li>
					<li><div className="divider"></div></li>
					<li><a className="subheader">Subheader</a></li>
					<li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
				</ul>

			</div>
		</div>
	}

};