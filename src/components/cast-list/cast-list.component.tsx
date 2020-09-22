import React from "react";

// Components
import CastThumbnail from "../cast-thumbnail/cast-thumbnail.component";

interface CastListPropsTypes {
	cast: any;
	header: string;
}

const CastList: React.FC<CastListPropsTypes> = (props) => {
	const { cast, header } = props;
	console.log(cast);
	return (
		<div className="cast-list">
			{/* {header && !loading ? <h1>{header}</h1> : null} */}
			<div className="cast-list-content">
				{cast.map((actor: any, i: number) => (
					<CastThumbnail key={i} actor={actor} />
				))}
			</div>
		</div>
	);
};

export default CastList;
