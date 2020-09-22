import React from "react";

// Styles
import "./thumbnail.styles.scss";

interface ThumbnailPropsTypes {
	image: string;
}

const Thumbnail: React.FC<ThumbnailPropsTypes> = (props) => {
	const { image } = props;
	return (
		<div className="movie-thumbnail">
			<img src={image} alt={"movieThumb"} />
		</div>
	);
};

export default Thumbnail;
