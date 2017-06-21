let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a453eb6eb7df9141b50e76fce5c27a65&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			//debugger
			// success
			let cod = res.data.cod,
				msg = res.data.message,
				temp = res.data.main.temp,
				location = res.data.name,
				country = res.data.sys.country;

			if (cod && msg) {
				// error
				throw new Error(msg);
			}
			else {
				// success
				return {temp, location, country};
			}
		},
		function(res) {
			// error
			// console.log(res.cod, res.message);
			return res.message;
		});
	}
}
