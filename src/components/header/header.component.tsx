import React from "react";

// Styles
import "./header.styles.scss";

// Images
import logo from "../../assets/images/logo.png";
import tmdb_logo from "../../assets/images/tmdb_logo.png";

const Header: React.FC = () => (
	<div className="Header">
		<div className="header-content">
			<img src={logo} className="logo" alt="logo" />
			<img src={tmdb_logo} className="tmdb-logo" alt="tmdb-logo" />
		</div>
	</div>
);

export default Header;
