import React from "react";

interface ThumbnailPropsTypes {
	image: string;
	movieId: any;
	movieName: string;
}

const Thumbnail: React.FC<ThumbnailPropsTypes> = (props) => {
	const { image, movieId, movieName } = props;
	return <div>this is Thumbnail</div>;
};

export default Thumbnail;
