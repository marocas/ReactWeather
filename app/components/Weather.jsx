const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
	getInitialState: function() {
		// return {location: 'Miami', temp: 23.91, country: 'US'}
		return {isLoading: false}
	},

	handleSearch: function(location) {
		let that = this;

		// debugger;
		this.setState({isLoading: true})

		openWeatherMap.getTemp(location).then(
			function(response) {
				// success
				let message = response,
				temp = message.temp,
				location = message.location,
				country = message.country;

				that.setState({temp: temp, location: location, country: country, isLoading: false});

			},
			function(response) {
				// error
				let message = response;
				console.warn('error ', message);
				isLoading : false
			}
		);
	},

	render: function() {
		let {isLoading, temp, location, country} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather...</h3>
			} else if (temp && location && country) {
				return <WeatherMessage temp={temp} location={location} country={country}></WeatherMessage>
			}
		}

		return (
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
