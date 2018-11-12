import React from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";

class App extends React.Component {
	render() {
		return (
			<div >
				<Header />
        <div className="App">
				  <Movie />
        </div>
      </div>
		);
	}
}

export default App;
