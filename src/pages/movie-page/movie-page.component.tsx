import React, { useState, useEffect } from "react";

// Components
import CastList from "../../components/cast-list/cast-list.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import MovieInfoBar from "../../components/movie-info-bar/movie-info-bar.component";
import MovieInfo from "../../components/movie-info/movie-info.component";

import { API_KEY, API_URL } from "../../constants/tmdb.config";

// Styles
import "./movie-page.styles.scss";

interface MoviePagePropsTypes {
	match: any;
}

const MoviePage: React.FC<MoviePagePropsTypes> = (props) => {
	// states
	const [movie, setMovie] = useState<any>(null);
	const [cast, setCast] = useState<any>(null);
	const [loading, setLoading] = useState<any>(false);
	const [directors, setDirectors] = useState<any>([]);
	const { movieId } = props.match.params;

	useEffect(() => {
		let endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
		fetchItems(endPoint);
	}, []);

	const fetchItems = (endPoint: string) => {
		fetch(endPoint)
			.then((result) => result.json())
			.then((result) => {
				if (result.status_code) {
					setLoading(false);
				} else {
					setMovie(result);
					let endPoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
					fetch(endPoint)
						.then((result) => result.json())
						.then((result) => {
							const directors = result.crew.filter(
								(member: any) => member.job === "Director"
							);
							setCast(result.cast);
							setDirectors(directors);
							setLoading(false);
						});
				}
			})
			.catch((error) => console.error("Error:", error));
	};

	return (
		<div className="movie-page">
			{movie ? (
				<div>
					<MovieInfo movie={movie} directors={directors} />
					<MovieInfoBar
						time={movie.runtime}
						budget={movie.budget}
						revenue={movie.revenue}
					/>
				</div>
			) : null}
			{cast ? (
				<div className="movie-page-grid">
					<CastList header={"Cast"} cast={cast} loading={loading} />
				</div>
			) : null}
			{!cast && loading ? <h1>No movie found!</h1> : null}
			{!loading ? <LoadingSpinner /> : null}
		</div>
	);
};

export default MoviePage;
