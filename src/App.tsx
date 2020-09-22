import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home-page/home-page.component";
import MoviePage from "./pages/movie-page/movie-page.component";

// Components
import Header from "./components/header/header.component";
import NotFound from "./components/404/404.component";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:movieId" component={MoviePage} exact />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
