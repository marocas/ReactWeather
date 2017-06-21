const React = require('react');

let WeatherForm = React.createClass({
	onFormSubmit: function(evt) {
		evt.preventDefault();

		let inputLocation = this.refs.inputLocation.value;

		if (inputLocation.length > 0) {
			this.refs.inputLocation.value = '';
			this.props.onSearch(inputLocation);
		}
	},

	render: function() {
		return (
			<form action='' onSubmit={this.onFormSubmit}>
				<input ref='inputLocation' type='text' placeholder='Enter city name'/>
				<button>Get Weather</button>
			</form>
		)
	}
});

module.exports = WeatherForm;
