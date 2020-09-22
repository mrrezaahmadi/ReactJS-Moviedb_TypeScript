import React from "react";

// Components
import CastThumbnail from "../cast-thumbnail/cast-thumbnail.component";

// Styles
import "./cast-list.styles.scss";

interface CastListPropsTypes {
	cast: any;
	header: string;
	loading: boolean;
}

const CastList: React.FC<CastListPropsTypes> = (props) => {
	const { cast, header, loading } = props;
	return (
		<div className="cast-list">
			{header && !loading ? <h1>{header}</h1> : null}
			<div className="cast-list-content">
				{cast
					.map((actor: any, i: number) => <CastThumbnail actor={actor} />)
					.map((actor: any, i: number) => (
						<div className="cast-list-content-element" key={i}>
							{actor}
						</div>
					))}
			</div>
		</div>
	);
};

export default CastList;
