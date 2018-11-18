import React from "react";

class Subtitle extends React.Component {
	render() {
		let title = this.props.text;
		title && (title = title.toUpperCase());

		return (
			<div className="Subtitle">
				{/* <h3>{this.props.text.toUpperCase()}</h3> */}
				<h3>{title}</h3>
			</div>
		);
	}
}

export default Subtitle;
