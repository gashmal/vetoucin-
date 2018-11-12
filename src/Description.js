import React from "react";

class Description extends React.Component {
	render() {
		return (
			<div className="Description">
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Description;
