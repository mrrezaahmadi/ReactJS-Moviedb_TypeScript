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
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import SearchBar from "../../components/searchbar/searchbar.component";

const Home: React.FC = () => {
	const [movies, setMovies] = useState<any>([]);
	const [poster, setPoster] = useState<any>(null);
	const [currentPage, setCurrentPage] = useState<any>(0);
	const [totalPages, setTotalPages] = useState<any>(0);
	const [loading, setLoading] = useState<any>(false);
	const [searchTerm, setSearchTerm] = useState<any>("");

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
				setLoading(false);
			})
			.catch((error) => console.error("Error:", error));
	};

	const onSearchHandler = (e: any) => {
		let endpoint = "";

		setMovies([]);
		setSearchTerm(e.target.value);
		setLoading(true);

		if (searchTerm === "") {
			endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		} else {
			endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
		}
		fetchItems(endpoint);
	};

	const loadMoreItems = () => {
		let endpoint = "";

		setLoading(true);

		if (searchTerm === "") {
			endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
				currentPage + 1
			}`;
		} else {
			endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
				currentPage + 1
			}`;
		}
		fetchItems(endpoint);
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
					<SearchBar onSearchHandler={onSearchHandler} />
				</div>
			) : null}
			<div className="movie-list-grid">
				<MovieList
					movies={movies}
					loading={loading}
					header={searchTerm ? "Search Result" : "Popular Movies"}
				/>
				{loading ? <LoadingSpinner /> : null}
				{currentPage <= totalPages && !loading ? (
					<LoadMoreBtn loadMoreButtonHandler={loadMoreItems} />
				) : null}
			</div>
		</div>
	);
};

export default Home;
