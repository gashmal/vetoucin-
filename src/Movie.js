import React, { Component } from "react";
import axios from "axios";
import Cover from "./Cover";
import Item from "./Item";
import Subtitle from "./Subtitle";
import Description from "./Description";

class Movie extends Component {
	state = {
		selectedTab: "popular",
		movies: [],
		pages: 1
	};

	dryMyMen = (type, num) => {};

	render() {
		console.log(this.state.pages);

		const movieComponents = [];
		for (let i = 0; i < this.state.movies.length; i++) {
			movieComponents.push(
				<li key={i} className="cards">
					<div className="row">
						<Cover
							url={
								"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
								this.state.movies[i].poster_path
							}
						/>
						<div>
							<Subtitle text={this.state.movies[i].title} />
							<Item
								label="Date de sortie"
								text={this.state.movies[i].release_date}
							/>

							<Description text={this.state.movies[i].overview} />
						</div>
					</div>
				</li>
			);
		}

		let classPop = "bonhomme";
		let classUp = "bonhomme";
		let classTr = "bonhomme";
		if (this.state.selectedTab === "popular") {
			classPop = "bonhomme focused";
		} else if (this.state.selectedTab === "upcoming") {
			classUp = "bonhomme focused";
		} else {
			classTr = "bonhomme focused";
		}

		return (
			<div className="movie">
				<ul className="row">
					<li
						className={classPop}
						onClick={() => {
							this.setState({
								selectedTab: "popular",
								pages: 1
							});

							axios
								.get("https://api-allocine.herokuapp.com/api/movies/popular")
								.then(response => {
									this.setState({
										movies: response.data.results
									});
								});
						}}
					>
						Popular
					</li>
					<li
						className={classUp}
						onClick={() => {
							this.setState({
								selectedTab: "upcoming",
								pages: 1
							});

							axios
								.get("https://api-allocine.herokuapp.com/api/movies/upcoming")
								.then(response => {
									this.setState({
										movies: response.data.results
									});
								});
						}}
					>
						Upcoming
					</li>
					<li
						className={classTr}
						onClick={() => {
							this.setState({
								selectedTab: "top_rated",
								pages: 1
							});

							axios
								.get("https://api-allocine.herokuapp.com/api/movies/top_rated")
								.then(response => {
									this.setState({
										movies: response.data.results
									});
								});
						}}
					>
						Top rated
					</li>
					<li
						className="bonhomme next"
						onClick={() => {
							axios
								.get(
									"https://api-allocine.herokuapp.com/api/movies/" +
										this.state.selectedTab +
										"?p=" +
										(this.state.pages + 1)
								)
								.then(response => {
									this.setState({
										movies: response.data.results,
										pages: this.state.pages + 1
									});
								});
						}}
					>
						Next
					</li>
					<li
						className="bonhomme next"
						onClick={() => {
							if (this.state.pages > 1) {
								axios
									.get(
										"https://api-allocine.herokuapp.com/api/movies/" +
											this.state.selectedTab +
											"?p=" +
											(this.state.pages - 1)
									)
									.then(response => {
										this.setState({
											movies: response.data.results,
											pages: this.state.pages - 1
										});
									});
							}
						}}
					>
						Back
					</li>
					<li className="bonhomme">Page {this.state.pages}</li>
				</ul>
				<ul className="cardContainer">{movieComponents}</ul>
			</div>
		);
	}

	// Déclenché en deuxième (juste après le premier render)
	componentDidMount() {
		console.log("Did Mount");
		axios
			.get("https://api-allocine.herokuapp.com/api/movies/popular")
			.then(response => {
				this.setState({
					movies: response.data.results
				});
			});
	}
}

export default Movie;
