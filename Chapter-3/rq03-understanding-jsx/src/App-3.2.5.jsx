import React, { Fragment, Component } from "react";

/*
class ProfileLink extends Component {
	render() {
		return (
			<a href={this.props.url} title={this.props.label} target="_blank">
				Profile
			</a>
		);
	}
}
    return <input value={this.value} {...this.props} />;

    This is will use spread operator and render all the properties from this.props, overriding "this.value", 
    since it spreading is done after setting.
*/

class Link extends Component {
	render() {
		return (
			<p>
				<a href={this.props.url} target="_blank">
					{this.props.children}
				</a>
			</p>
		);
	}
}

class App extends Component {
	render() {
		const reactStrong = <strong>React</strong>;
		const link1 = <Link url="//react.dev">{reactStrong}</Link>;
		const link2 = <Link url="//vuejs.org">Vue</Link>;
		const link3 = <Link url="//vitejs.dev">Vite</Link>;

		return (
			<Fragment>
				{link1} {link2} {link3}
			</Fragment>
		);
	}
}

export default App;
