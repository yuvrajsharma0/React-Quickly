import React, { Component, Fragment } from "react";

/* Using React.createElement()
class App extends Component {
	render() {
		return React.createElement(
			"h1",
			null,
			"Hello ",
			React.createElement("em", null, "World"),
			"!"
		);
	}
}
*/

/* Using JSX
class App extends Component {
	render() {
		return (
			<h1>
				Hello <em>World</em>!
			</h1>
		);
	}
}
*/

/* Storing Element in a variable since JSX is just syntactic improvement of React.createElement() */
class App extends Component {
	render() {
		const title = (
			<h1>
				Hello <em>World</em>!!
			</h1>
		);

		return title;
	}
}

export default App;
