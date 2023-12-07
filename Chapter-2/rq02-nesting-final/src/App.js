import React, { Fragment, Component } from "react";
import Link from "./Link.js";

/*
    Moving Link Component to separate file, 
    Another way (customary way) is to create separate file for each component

class Link extends Component {
	render() {
		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				{ href: this.props.url, target: "_blank" },
				`Read more about ${this.props.framework}`
			)
		);
	}
}
*/

class App extends Component {
	render() {
		const link1 = React.createElement(Link, {
			framework: "React",
			url: "//react.dev",
		});
		const link2 = React.createElement(Link, {
			framework: "Vue",
			url: "//vuejs.org",
		});
		const link3 = React.createElement(Link, {
			framework: "Vite",
			url: "//vitejs.dev",
		});

		return React.createElement(Fragment, null, link1, link2, link3);
	}
}

export default App;
