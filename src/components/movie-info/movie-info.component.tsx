import React from "react";

// Constants
import {
	IMAGE_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
} from "../../constants/tmdb.config";

// Styles
import "./movie-info.styles.scss";

// Libraries
import FontAwesome from "react-fontawesome";

// Components
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

// Images
import no_image from "../../assets/images/no_image.jpg";

interface MovieInfoPropsTypes {
	movie: any;
	directors: any;
}

const MovieInfo: React.FC<MovieInfoPropsTypes> = (props) => {
	const { movie, directors } = props;
	return (
		<div
			className="movie-info"
			style={{
				background: movie.backdrop_path
					? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
					: "#000",
			}}
		>
			<div className="movie-info-content">
				<div className="movie-info-thumnail">
					<MovieThumbnail
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: { no_image }
						}
					/>
				</div>
				<div className="movie-info-text">
					<h1>{movie.title}</h1>
					<h3>PLOT</h3>
					<p>{movie.overview}</p>
					<h3>IMDB Rating</h3>
					<div className="movie-info-rating">
						<meter
							min="0"
							max="100"
							optimum={100}
							low={40}
							high={70}
							value={movie.vote_average * 10}
						/>
						<p className="movie-info-score">{movie.vote_average}</p>
						{directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
						{directors.map((director: any, i: number) => (
							<p key={i} className="movie-info-director">
								{director.name}
							</p>
						))}
					</div>
					<FontAwesome className="fa-film" name="film" size="5x" />
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
