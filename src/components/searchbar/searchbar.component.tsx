import React, { useState } from "react";

// Libraries
import FontAwesome from "react-fontawesome";

// Styles
import './searchbar.styles.scss'

interface SearchBarPropsTypes {
	onSearchHandler: (value: string) => void;
}

const SearchBar: React.FC<SearchBarPropsTypes> = (props) => {
	const { onSearchHandler } = props;
	const [value, setValue] = useState<any>("");

	const inputSearchHandler = (e: any) => {
		setValue(e.target.value);
		onSearchHandler(value);
	};
	return (
		<div className="search-bar">
			<div className="search-bar-content">
				<FontAwesome className="fa-search" name="search" size="2x" />
				<input
					type="text"
					className="search-bar-input"
					placeholder="Search ..."
					onChange={inputSearchHandler}
					value={value}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
