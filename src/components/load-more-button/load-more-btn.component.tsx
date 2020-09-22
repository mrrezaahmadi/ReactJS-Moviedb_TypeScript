import React from "react";

// Styles
import "./load-more-btn.styles.scss";

interface LoadMoreBtnPropsTypes {
	loadMoreButtonHandler: any;
}

const LoadMoreBtn: React.FC<LoadMoreBtnPropsTypes> = (props) => {
	const { loadMoreButtonHandler } = props;
	return (
		<div className="load-more-btn" onClick={loadMoreButtonHandler}>
			<p>Load More</p>
		</div>
	);
};

export default LoadMoreBtn;
