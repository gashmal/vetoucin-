import React from "react";

class Cover extends React.Component {
	render() {
		return (
			<div className="Cover">
				<img src={this.props.url} alt="" />
			</div>
		);
	}
}

export default Cover;
