import React, { Component } from "react";
import axios from "axios";
import Cover from "./Cover";
import Item from "./Item";
import Subtitle from "./Subtitle";
import Description from "./Description";

class Cart extends Component {
	state = {
		movie: []
	};

	render() {
		return (
			<div className="App movie topMargin">
				<div className="row cards large">
					<Cover
						url={
							"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
							this.state.movie.poster_path
						}
					/>
					<div>
						<Subtitle text={this.state.movie.title} />
						<Item label="Date de sortie" text={this.state.movie.release_date} />
						<Item label="Note moyenne" text={this.state.movie.vote_average} />
						<Description text={this.state.movie.overview} />
					</div>
				</div>
			</div>
		);
	}

	// Déclenché en deuxième (juste après le premier render)
	componentDidMount() {
		console.log("Did Mount");
		axios
			.get(
				"https://api.themoviedb.org/3/movie/" +
					this.props.match.params.id +
					"?api_key=5575e651f750ce91238814f00c655bae&language=fr-fr"
			)
			.then(response => {
				console.log("response", response.data);

				this.setState({
					movie: response.data
				});
			});
	}
}

export default Cart;
