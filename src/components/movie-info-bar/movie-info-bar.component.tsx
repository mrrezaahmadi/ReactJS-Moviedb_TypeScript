import React from "react";

// Libraries
import FontAwesome from "react-fontawesome";

// Styles
import "./movie-info-bar.styles.scss";

// Utils
import { calcTime, convertMoney } from "../../utils/converters";

interface MovieInfoBarPropsTypes {
	time: any;
	budget: any;
	revenue: any;
}

const MovieInfoBar: React.FC<MovieInfoBarPropsTypes> = (props) => {
	const { time, budget, revenue } = props;
	return (
		<div className="movie-info-bar">
			<div className="movie-info-bar-content">
				<div className="movie-info-bar-content-col">
					<FontAwesome className="fa-time" name="clock-o" size="2x" />
					<span className="movie-info-bar-info">
						Running time: {calcTime(time)}
					</span>
				</div>
				<div className="movie-info-bar-content-col">
					<FontAwesome className="fa-budget" name="money" size="2x" />
					<span className="movie-info-bar-info">
						Budget: {convertMoney(budget)}
					</span>
				</div>
				<div className="movie-info-bar-content-col">
					<FontAwesome className="fa-revenue" name="ticket" size="2x" />
					<span className="movie-info-bar-info">
						Revenue: {convertMoney(revenue)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default MovieInfoBar;
