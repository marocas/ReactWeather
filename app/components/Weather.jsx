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

		this.setState({isLoading: true})

		openWeatherMap.getTemp(location).then(function(res) {
			// success
			let temp = res.temp,
				location = res.location,
				country = res.country,
				status = res.status;
				debugger;
				that.setState({ temp: temp, location: location, country: country, cod: status, isLoading: false });
			},
			function(errorMessage) {
				// error
				that.setState({isLoading: false});
      			console.warn('error ', errorMessage);
			}
		);
	},

	render: function() {
		let {isLoading, temp, location, country, cod} = this.state;
		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if (cod === 400) {
				return <h3 className="text-center">No city found...</h3>
			} else if (temp && location && country) {
				return <WeatherMessage temp={temp} location={location} country={country}></WeatherMessage>
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
