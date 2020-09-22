import React, { useState, useEffect } from "react";
import "./home-page.styles.scss";

// APIs
import {
	API_URL,
	API_KEY,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
} from "../../constants/tmdb.config";

// Components
import Poster from "../../components/poster/poster.component";
import MovieList from "../../components/movie-list/movie-list.component";

const Home: React.FC = () => {
	const [movies, setMovies] = useState<any>([]);
	const [poster, setPoster] = useState<any>(null);

	useEffect(() => {
		const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		fetchItems(endPoint);
	}, []);

	const fetchItems = (endPoint: string) => {
		fetch(endPoint)
			.then((result) => result.json())
			.then((result) => {
				setMovies([...movies, ...result.results]);
				setPoster(poster || result.results[0]);
			});
	};

	return (
		<div className="Home">
			{poster ? (
				<div>
					<Poster
						image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${poster.backdrop_path}`}
						title={poster.original_size}
						text={poster.overview}
					/>
				</div>
			) : null}
			<div className="movie-list-grid">
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Home;
