const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let ErrorModal = require('ErrorModal');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
	getInitialState: function() {
		// return {location: 'Miami', temp: 23.91, country: 'US'}
		return {isLoading: false}
	},

	handleSearch: function(location) {
		let that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(res) {
			// success
			let temp = res.temp, location = res.location, country = res.country, status = res.status;

				that.setState({ 
					temp: temp, 
					location: location, 
					country: country, 
					cod: status, 
					isLoading: false 
				});
			},
			function(e) {
				// error
				that.setState({
					isLoading: false,
					errorMessage: e.message
				});
			}
		);
	},

	render: function() {
		var {isLoading, temp, location, country, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if (temp && location && country) {
				return <WeatherMessage temp={temp} location={location} country={country}></WeatherMessage>
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
