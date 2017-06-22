const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <nav className="navbar">
        <IndexLink className="nav-item" to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link className="nav-item" to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link className="nav-item" to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </nav>
    </div>
  );
};

module.exports = Nav;
