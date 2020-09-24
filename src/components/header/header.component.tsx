import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header.styles.scss";

// Images
import logo from "../../assets/images/logo.png";
import tmdb_logo from "../../assets/images/tmdb_logo.png";

const Header: React.FC = () => (
	<div className="Header">
		<div className="header-content">
			<Link to={"/ReactJS-Moviedb_TypeScript"}>
				<img src={logo} className="logo" alt="logo" />
			</Link>
			<img src={tmdb_logo} className="tmdb-logo" alt="tmdb-logo" />
		</div>
	</div>
);

export default Header;
