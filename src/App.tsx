import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home-page/home-page.component";

// Components
import Header from "./components/header/header.component";
import MoviePage from "./pages/movie-page/movie-page.component";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:movieId" component={MoviePage} exact />
			</Switch>
		</Router>
	);
};

export default App;
