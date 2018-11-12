import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
	render() {
		return (
			<div className="App-header">
				<Logo url="https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Allocin%C3%A9_Logo.svg/1200px-Allocin%C3%A9_Logo.svg.png" />
			</div>
		);
	}
}

export default Header;
