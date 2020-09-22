import React from "react";

// Libraries
import FontAwesome from "react-fontawesome";

// Styles
import "./searchbar.styles.scss";

interface SearchBarPropsTypes {
	onSearchHandler: (e: any) => void;
}

const SearchBar: React.FC<SearchBarPropsTypes> = (props) => {
	const { onSearchHandler } = props;

	return (
		<div className="search-bar">
			<div className="search-bar-content">
				<FontAwesome className="fa-search" name="search" size="2x" />
				<input
					type="text"
					className="search-bar-input"
					placeholder="Search ..."
					onChange={onSearchHandler}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
