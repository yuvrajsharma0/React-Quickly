import React, { Component, Fragment } from "react";

/* Outputting variables */

/* Javascript only React, we use string template literals (backticks ``) or string concatenation

class DateTimeNow extends React.Component {
	render() {
		const dateTimeNow = new Date().toLocaleString();
		return React.createElement(
			"span",
			null,
			`Current date and time is ${dateTimeNow}.`
		);
	}
}
*/

/* In JSX, you can use curly brace {} notation to output variables dynamically
class DateTimeNow extends Component {
	render() {
		const dateTimeNow = new Date().toLocaleString();
		return <span>Current date and time is {dateTimeNow}</span>;
	}
}
*/

class App extends Component {
	render() {
		const worldItalic = <em>World</em>;
		return <h1>Hello {worldItalic}!</h1>;
	}
}

export default App;
