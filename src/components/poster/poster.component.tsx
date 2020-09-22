import React from "react";

// Styles
import "./poster.styles.scss";

interface PosterPropsTypes {
	image: string;
	title: string;
	text: string;
}

const Poster: React.FC<PosterPropsTypes> = (props) => {
	const { title, text, image } = props;
	return (
		<div
			className="Poster"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0,0,0)
              39%,rgba(0,0,0,0)
              41%,rgba(0,0,0,0.65)
              100%),
              url('${image}'), #1c1c1c`,
			}}
		>
			<div className="poster-content">
				<div className="poster-text">
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Poster;
