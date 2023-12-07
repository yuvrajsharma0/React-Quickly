/*
import React from "react";
import ReactDOM from "react-dom/client";
 
Default Template Code from React-Quickly showing "Hello World!"

const title = React.createElement("h1", null, "Hello world!");
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(title);
*/

/*
    Nesting Elements
*/

import React from "react";
import ReactDOM from "react-dom/client";

/* Simple Nesting
const world = React.createElement("em", null, "World");
const title = React.createElement("h1", null, "Hello ", world, "!!");

const domNode = document.getElementById("root");
const root = ReactDom.createRoot(domNode);

root.render(title);
*/

/*
    Siblings (Sibling Elements / Nodes)
    1. Using Wrap in a parent neutral-dom like div
    2. Use React "Fragment" Element

    Difference is Neutal-DOM element like div will show in HTML but React "Fragment" will not show. Eg:
    Method 1:
        <div id="root">   
            <div>
                <h1>Hello World</h1>
                <a>Read More</a>
            </div>
        </div>

    Method 2:
        <div id="root">   
            <h1>Hello World</h1>
            <a>Read More</a>
        </div>
*/

/*
    Method 1: Using "div" dom node

const title = React.createElement("h1", null, "Hello World!");
const link = React.createElement(
	"a",
	{ href: "http://react.dev/learn", target: "_blank" },
	"Read More on React Docs"
);
const group = React.createElement("div", null, title, link);

const domNode = document.getElementById("root");
const root = ReactDom.createRoot(domNode);
root.render(group);
*/

/* Method 2: Using React's "Fragment"

const title = React.createElement("h1", null, "Hello World!");
const link = React.createElement(
	"a",
	{ href: "http://react.dev/learn", target: "_blank" },
	"Read More on React Docs"
);

const group = React.createElement(React.Fragment, null, title, link);

const domNode = document.getElementById("root");
const root = ReactDom.createRoot(domNode);
root.render(group);
 */

/*
    Creating Custom Componenets
*/

/* Approach 1 - Naive Approach:
    Three Identical Copies of Elements


const link1 = React.createElement(
	"a",
	{ href: "//react.dev", target: "_blank" },
	"Read more about React"
);
const p1 = React.createElement("p", null, link1);

const link2 = React.createElement(
	"a",
	{ href: "//react.dev", target: "_blank" },
	"Read more about React"
);
const p2 = React.createElement("p", null, link2);

const link3 = React.createElement(
	"a",
	{ href: "//react.dev", target: "_blank" },
	"Read more about React"
);
const p3 = React.createElement("p", null, link3);

const group = React.createElement(React.Fragment, null, p1, p2, p3);

const domNode = document.getElementById("root");
const root = ReactDom.createRoot(domNode);
root.render(group);
*/

/*
    Approach 2: Custom Components
    Class Components need to extene "React.Component" class and a "render" function which return a react element.

    To create an instance of it, we need to pass this component in "React.createElement(Link)".
    It returns a new React element that represents an instance of the "Link" component.

    When you create an instance of a React component using React.createElement, you are essentially creating a virtual representation of a DOM element or a group of elements along with their associated behavior. This representation, or React element, encapsulates the structure and behavior defined in the component's render method.


class Link extends React.Component {
	render() {
		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				{ href: "//react.dev", target: "_blank" },
				"Read more about React"
			)
		);
	}
}

const link1 = React.createElement(Link);
const link2 = React.createElement(Link);
const link3 = React.createElement(Link);

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);
*/

/* 
    Working with Properties
*/

/*
One thing to remember is that properties are immutable within their components. A parent assigns properties to its children upon their creation. The child element isn’t supposed to modify its properties. For instance, you can pass property PROPERTY_NAMEwith value VALUE to a component of type Link, like this:
React.createElement(Link, { PROPERTY_NAME: VALUE });

Also this.props is frozen, you can't write or edit or configure the object. You only read it. Obejct.isFrozen method can be used to confirm it.


class Link extends React.Component {
	render() {
		console.log(this.props);
		console.log(Object.isFrozen(this.props));

		const isObjectEmpty = Object.keys(this.props).length == 0;

		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				isObjectEmpty ? { href: "//react.dev", target: "_blank" } : this.props,
				"Read more on React"
			)
		);
	}
}

const link1 = React.createElement(Link, {
	href: "//react.dev/learn",
	target: "_blank",
});
const link2 = React.createElement(Link);
const group = React.createElement(React.Fragment, null, link1, link2);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);
*/

/* Single Property 

class Link extends React.Component {
	render() {
		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				{ href: "//react.dev", target: "_blank" },
				`Read more about ${this.props.framework}`
			)
		);
	}
}

const link1 = React.createElement(Link, { framework: "React" });
const link2 = React.createElement(Link, { framework: "Vue" });
const link3 = React.createElement(Link, { framework: "Angular" });

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);
*/

/* Multiple Properties */

/* 
    Using Multiple Properties

class Link extends React.Component {
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

/* Multiple Properties: Rendering based on a value of property(this.props) 

class Link extends React.Component {
	render() {
		const link = React.createElement(
			"a",
			{ href: this.props.url, target: "_blank" },
			`Read more about ${this.props.framework}`
		);

		if (this.props.framework == "React") {
			return React.createElement("h1", null, link);
		}
		return React.createElement("p", null, link);
	}
}

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

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);
*/

/* The Special Property Children
    this.props has a special property named 'children' when we pass some value to 3rd argument or later to
    our custom component React.createElement(1st, 2nd, 3rd, ...).

    It stores the children as child node or in case of childrens as a array of child nodes which we can use 
    in component
*/

/* 1. Passing React Component as a property

class Link extends React.Component {
	render() {
		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				{ href: this.props.url, target: "_blank" },
				this.props.framework
			)
		);
	}
}

const boldReact = React.createElement("strong", null, "React");
const link1 = React.createElement(Link, {
	framework: boldReact,
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

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);

*/

/* Using Special Children propery of this.props */

class Link extends React.Component {
	render() {
		return React.createElement(
			"p",
			null,
			React.createElement(
				"a",
				{ href: this.props.url, target: "_blank" },
				this.props.children
			)
		);
	}
}

const boldReact = React.createElement("strong", null, "React");
const link1 = React.createElement(Link, { url: "//react.dev" }, boldReact);
const link2 = React.createElement(Link, { url: "//vuejs.org" }, "Vue", "tt");
const link3 = React.createElement(Link, { url: "//vitejs.dev" }, "Vite");

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(group);

// Project Organization happens here - Standard Structure used by CRA(create-react-app)
