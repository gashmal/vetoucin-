import React from "react";

class Subtitle extends React.Component {
	render() {
		return (
			<div className="Subtitle">
				<h3>{this.props.text.toUpperCase()}</h3>
			</div>
		);
	}
}

export default Subtitle;
