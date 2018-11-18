import React from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/">
						<Header />
					</Link>

					<Switch>
						<Route exact path="/" component={Movie} />
						<Route path="/:id" component={Card} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
