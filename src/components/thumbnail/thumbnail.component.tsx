import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./thumbnail.styles.scss";

interface ThumbnailPropsTypes {
	image: string;
	movieId: number;
	movieName: string;
}

const Thumbnail: React.FC<ThumbnailPropsTypes> = (props) => {
	const { image, movieId, movieName } = props;
	return (
		<div className="movie-thumbnail">
			<Link to={{ pathname: `/${movieId}` }}>
				<img src={image} alt={"movieThumb"} />
			</Link>
		</div>
	);
};

export default Thumbnail;
