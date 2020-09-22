import React from "react";

// Styles
import "./header.styles.scss";

const Header: React.FC = () => (
	<div className="Header">
		<div className="header-content">
			<img
				src={require("../../assets/images/logo.png")}
				className="logo"
				alt="logo"
			/>
			<img
				src={require("../../assets/images/tmdb_logo.png")}
				className="tmdb-logo"
				alt="tmdb-logo"
			/>
		</div>
	</div>
);

export default Header;
