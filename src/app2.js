import React from "react";
import Title from "./Title";
import Cover from "./Cover";
import Item from "./Item";
import Button from "./Button";
import Subtitle from "./Subtitle";
import Description from "./Description";

class Movie extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	async componentDidMount() {
		const res = await fetch(
			"https://allo-vetou.herokuapp.com/api/movies/popular"
		);
		const film = await res.json();
		console.log(film);

		this.setState({ data: film.results });
	}

	toto = async () => {};
	render() {
		return (
			<div>
				<Title title="2001 : L'odyssée de l'espace" />
				<div className="row">
					<Cover url="http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/05/04/14/53/4306860.jpg" />
					<div>
						<div className="Items">
							<Item label="Date de reprise" text="7 mars 2001" />
							<Item label="Date de sortie" text="27 septembre 1968" />
							<Item label="De" text="Stanley Kubrick" />
							<Item
								label="Avec"
								text="Keir Dullea, Gary Lockwood, William Sylvester"
							/>
							<Item label="Genre" text="Science fiction" />
							<Item label="Nationalités" text="Américain, Britanique" />
						</div>
						<div>
							<Button theme="black" text="Bande-Annonce" />
							<Button theme="yellow" text="Séances (2)" />
							<Button theme="grey" text="Ce film en VOD" />
						</div>
					</div>
				</div>
				<Subtitle text="Synopsis et détails" />
				<Description
					text={
						"A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né. En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du \"Beau Danube Bleu\". A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter. Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole font route vers Jupiter à bord du Discovery. Les deux hommes vaquent sereinement à leurs tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans doute plus humain que ses maîtres, commence à donner des signes d'inquiétude : à quoi rime cette mission et que risque-t-on de découvrir sur Jupiter ?"
					}
				/>

				{this.state.data.map(film => {
					let date = new Date(film.release_date);
					let options = {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric"
					};
					date = date.toLocaleDateString("fr-FR", options);

					return (
						<div>
							<Title key={film.id} title={film.title} />
							<div className="row">
								<Cover
									url={
										"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
										film.poster_path
									}
								/>
								<div>
									<div className="Items">
										<Item label="Date de reprise" text="7 mars 2001" />
										<Item label="Date de sortie" text={date} />
										<Item label="De" text="Stanley Kubrick" />
										<Item
											label="Avec"
											text="Keir Dullea, Gary Lockwood, William Sylvester"
										/>
										<Item label="Genre" text="Science fiction" />
										<Item label="Nationalités" text="Américain, Britanique" />
									</div>
									<div>
										<Button theme="black" text="Bande-Annonce" />
										<Button theme="yellow" text="Séances (2)" />
										<Button theme="grey" text="Ce film en VOD" />
									</div>
								</div>
							</div>
							<Subtitle text="Synopsis et détails" />
							<Description text={film.overview} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default Movie;
