import React from "react";
import "./App.css";

// Pages
import Home from "./pages/home-page/home-page.component";

// Components
import Header from "./components/header/header.component";

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Home />
		</div>
	);
};

export default App;
