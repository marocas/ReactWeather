let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a453eb6eb7df9141b50e76fce5c27a65&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			debugger;
			// success
			let cod = res.data.cod,
				status = res.status,
				temp = res.data.main.temp,
				location = res.data.name,
				country = res.data.sys.country;

			if (status !== 200) {
				// error
				throw new Error(status);
			}
			else {
				// success
				return {temp, location, country, status};
			}
		},
		function(res) {
			// debugger;		
			// error
			let msg = res.response.data.message,
				cod = res.response.data.cod;

			console.log(cod, msg);
			return msg;
		});
	}
}
