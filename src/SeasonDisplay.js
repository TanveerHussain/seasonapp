import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer : {
		text : "let's hit the beach!",
		iconName : "sun"
	},
	winter : {
		text : "Bur it is cold",
		iconName : "snowflake"
	}
}


const getSeason = (lat, month) => {

	if (month > 2 && month < 9){
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}

}

const SeasonDisplay = (props) => {

	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconName} 	= seasonConfig[season];

	console.log(season);

    return (
    	<div className={`season-display ${season}`}>
    		<i className={`leftIcon ${iconName} icon massive`}></i>
    		<h1 className="title">{text}</h1>
    		<i className={`rightIcon ${iconName} icon massive`}></i>
    	</div>
    );
};

export default SeasonDisplay;