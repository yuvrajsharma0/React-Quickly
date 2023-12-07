import React, { Component } from "react";

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

export default Link;
