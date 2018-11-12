import React from "react";

class Item extends React.Component {
	render() {
		return (
			<div className="Item">
				<p>
					<span className="Label">{this.props.label}</span>{" "}
					<span className="ItemText">{this.props.text}</span>
				</p>
			</div>
		);
	}
}

export default Item;
