import React from "react";

// APIs
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../constants/tmdb.config";

// Components
import Thumbnail from "../thumbnail/thumbnail.component";

// Images
import no_image from "../../assets/images/no_image.jpg";

// Styles
import './movie-list.styles.scss'

interface MovieListPropsTypes {
	movies: any;
}

const MovieList: React.FC<MovieListPropsTypes> = (props) => {
	const { movies } = props;
	return (
		<div className="movie-list">
			<div className="movie-list-content">
				{movies
					.map((movie: any, i: number) => (
						<Thumbnail
							key={i}
							image={
								movie.poster_path
									? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
									: no_image
							}
						/>
					))
					.map((movie: any, i: number) => (
						<div className="movie-list-content-element" key={i}>
							{movie}
						</div>
					))}
			</div>
		</div>
	);
};

export default MovieList;
