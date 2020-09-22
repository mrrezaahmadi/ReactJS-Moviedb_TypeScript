import React from "react";

// Constants
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../constants/tmdb.config";

// Images
import no_image from "../../assets/images/no_image.jpg";

// Styles
import "./cast-thumbnail.styles.scss";

interface CastThumnailPropsTypes {
	actor: any;
}

const CastThumnail: React.FC<CastThumnailPropsTypes> = (props) => {
	const { actor } = props;

	const POSTER_SIZE = "w154";
	return (
		<div className="cast-thumbnail">
			<img
				src={
					actor.profile_path
						? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
						: `${no_image}`
				}
				alt="actorthumbnail"
			/>
			<span className="cast-thumbnail-name">{actor.name}</span>
			<span className="cast-thumbnail-character">{actor.character}</span>
		</div>
	);
};

export default CastThumnail;
