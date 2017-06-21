const React = require('react');

let WeatherMessage = ({temp, location, country}) => {
	debugger;
	return (
		<h3>It's it {temp}º in {location}, {country}!</h3>
	)
};

module.exports = WeatherMessage;
