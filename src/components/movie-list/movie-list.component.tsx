import React from "react";

// APIs
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../constants/tmdb.config";

// Components
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

// Images
import no_image from "../../assets/images/no_image.jpg";

// Styles
import "./movie-list.styles.scss";

interface MovieListPropsTypes {
	movies?: any;
	loading?: boolean;
	header?: string;
}

const MovieList: React.FC<MovieListPropsTypes> = (props) => {
	const { movies, loading, header } = props;
	return (
		<div className="movie-list">
			{header && !loading ? <h1>{header}</h1> : null}
			<div className="movie-list-content">
				{movies
					.map((movie: any, i: number) => (
						<MovieThumbnail
							clickable={true}
							key={i}
							image={
								movie.poster_path
									? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
									: no_image
							}
							movieId={movie.id}
						/>
					))
					.map((movie: any, i: number) => {
						return (
						<div className="movie-list-content-element" key={i}>
							{movie}
						</div>
					)})}
			</div>
		</div>
	);
};

export default MovieList;
