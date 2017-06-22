const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    console.log('Not yet wired up!');
  },

  render:function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink className="nav-item" to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>            
            </li>
            <li>
              <Link className="nav-item" to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>            
            </li>
            <li>
              <Link className="nav-item" to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>            
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form action="" onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
