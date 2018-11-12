import React from "react";

class Title extends React.Component {
	render() {
		return (
			<div className="Title">
				<h2>{this.props.title.toUpperCase()}</h2>
			</div>
		);
	}
}

export default Title;
