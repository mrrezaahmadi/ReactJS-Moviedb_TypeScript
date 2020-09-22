import React, { useState, useEffect } from "react";
import "./home-page.styles.scss";

// APIs
import {
	API_URL,
	API_KEY,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
} from "../../constants/tmdb.config";

// Styles
import "./home-page.styles.scss";

// Components
import Poster from "../../components/poster/poster.component";
import MovieList from "../../components/movie-list/movie-list.component";
import LoadMoreBtn from "../../components/load-more-button/load-more-btn.component";

const Home: React.FC = () => {
	const [movies, setMovies] = useState<any>([]);
	const [poster, setPoster] = useState<any>(null);
	const [currentPage, setCurrentPage] = useState<any>(0);
	const [totalPages, setTotalPages] = useState<any>(0);

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
				setCurrentPage(result.page);
				setTotalPages(result.total_pages);
			});
	};

	const loadMoreItems = () => {
		let endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
			currentPage + 1
		}`;
		fetchItems(endPoint);
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
				{currentPage <= totalPages ? (
					<LoadMoreBtn loadMoreButtonHandler={loadMoreItems} />
				) : null}
			</div>
		</div>
	);
};

export default Home;
