import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { API_KEY, API_URL } from "../../constants/tmdb.config";

interface MoviePagePropsTypes {
    match: any;
}

const MoviePage: React.FC<MoviePagePropsTypes> = (props) => {
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
			{movie ? <div>Here we go</div> : null}
			{cast ? <div className="movie-page-grid">this is cast member</div> : null}
			{!cast && !loading ? <h1>No movie found!</h1> : null}
			{loading ? <LoadingSpinner /> : null}
		</div>
	);
};

export default MoviePage;
