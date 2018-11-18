import React from "react";

class Tabs extends React.Component {
	render() {
		return <button className="tab">{this.props.text}</button>;
	}
}

export default Tabs;
