import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./movie-thumbnail.styles.scss";

interface ThumbnailPropsTypes {
	image?: any;
	movieId?: number;
	clickable?: any;
}

const Thumbnail: React.FC<ThumbnailPropsTypes> = (props) => {
	const { image, movieId, clickable } = props;
	return (
		<div className="movie-thumbnail">
			{clickable ? (
				<Link to={`/${movieId}`}>
					<img className="clickable" src={image} alt="movieThumb" />
				</Link>
			) : (
				<img src={image} alt={"movieThumb"} />
			)}
		</div>
	);
};

export default Thumbnail;
