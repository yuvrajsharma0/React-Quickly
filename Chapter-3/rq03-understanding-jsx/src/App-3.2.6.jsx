import React, { Fragment, Component } from "react";

/* 3.2.6  Branching in JSX
    1 Use early return for rendering nothing.
    2 Use the ternary operator for rendering alternative elements.
    3 Use the logical AND operator ( &&) for rendering optional elements.
    4 Use object maps for rendering between many different elements. 
    5 Use extra components for more complex branching.
*/

/* 1. USING EARLY RETURN FOR RENDERING NOTHING */

/* 
class Countdown extends Component {
	render() {
		const seconds = this.props.remaining % 60;
		const minutes = Math.floor(this.props.remaining / 60);
		const message = (
			<p>
				{minutes}:{seconds}
			</p>
		);
		if (seconds > 0 || minutes > 0) {
			return message;
		} else {
			return null;
		}
	}
}

To optimize our components, we try to do this as early as possible to short-circuit the execution. This
approach is better because we are not processing data then checking what to return. Above statement is also
good, but it is easier to read and optimized.

class Countdown extends Component {
	render() {
		if (this.props.remaining === 0) {
			return null;
		}
		const seconds = this.props.remaining % 60;
		const minutes = Math.floor(this.props.remaining / 60);
		return (
			<p>
				{minutes}:{seconds}
			</p>
		);
	}
}
*/

/* USING TERNARY FOR ALTERNATIVES 

<p>User is {this.props.isOnline ? "Online" : "Offline"}</p>;

class ShoppingCart extends Component {
	render() {
		return (
			<aside>
				<h1>Shopping cart</h1>
				{this.props.items.length === 0 ? (
					<p>Your cart is empty. Go buy something!</p>
				) : (
					<CartItems items={this.props.items} />
				)}
			</aside>
		);
	}
}
*/

/* USING LOGICAL OPERATORS FOR OPTIONAL RENDERING
    Like using && (AND) or || (OR) as they short-circuit
*/

class UserName extends Component {
	render() {
		return (
			<p>
				{this.props.username}
				{this.props.isVerified && <Checkmark />}
			</p>
		);
	}
}

/* USING OBJECTS FOR SWITCHING
    We can use ternary expression but it will become lengthy, switch case will also be same and also
    slightly more lengthy.
    Using objects or maps is much better.
*/

/*
const status2icon = {
	draft: <DraftIcon />,
	published: <PublishedIcon />,
	deleted: <DeletedIcon />,
};

class PostStatus extends Component {
	render() {
		return status2icon[this.props.status];
	}
}

    Note: this doesn’t handle the situation in which the status is none of those things.
    For that, we can use OR operator which short-circuits and returns something.

    To handle the case when the status is any other unexpected value, we need to add a logical OR at the end
    so that if the object indexing resolves to nothing, we still render an alternative. 
    Let’s say we just render the trash icon in any unknown case:

class PostStatus extends Component {
	render() {
		return status2icon[this.props.status] || status2icon.deleted;
	}
}
*/

/* USING EXTRA COMPONENTS FOR COMPLEX BRANCHING */

class ShoppingCart extends Component {
	render() {
		const hasItems = this.props.items.length > 0;
		const isLoggedIn = this.props.user !== null;
		const hasCreditCard = isLoggedIn && this.props.user.creditcard !== null;
		const hasAddress = isLoggedIn && this.props.user.address !== null;
		const isAvailable = this.props.items.every((item) => !item.outOfStock);

		return isLoggedIn ? (
			hasCreditCard ? (
				<Fragment>
					<button disabled={!hasItems || !isAvailable}>Checkout</button>
					{hasAddress && }
				</Fragment>
			) : (
				<button>Add Credit Card</button>
			)
		) : (
			true
		);
	}
}
