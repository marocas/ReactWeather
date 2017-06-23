let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a453eb6eb7df9141b50e76fce5c27a65&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios
				.get(requestUrl)
				.then(
					// Get then status SUCCESS
					function(res) {
						// debugger;
						let cod = res.data.cod,
							msg = res.data.message,
							temp = res.data.main.temp,
							location = res.data.name,
							country = res.data.sys.country;

						if (res.data.cod && res.data.message) {
							// error
							throw new Error(res.data.message);
						}
						else {
							// success
							return {temp, location, country};
						
						}
					},
		
					// Get then status ERROR
					function (err) {
						// debugger;
						// let msg = err.response.data.message;
						// throw new Error(msg);
						throw new Error('Unable to fetch weather for that location.');
					}
				);
	}
}
