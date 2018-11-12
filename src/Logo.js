import React from "react";

class Logo extends React.Component {
	render() {
		return (
        <div className="App">
            <img className="Logo" src={this.props.url} alt="Allocine" />
        </div>);
	}
}

export default Logo;
