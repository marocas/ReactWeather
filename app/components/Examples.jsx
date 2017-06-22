const React = require('react');
var {Link} = require('react-router');

let Examples = (props) => {
  return (
   <div>
      <h1 className="text-center">Examples</h1>
      
      <p>Here are a few examples locations to try out:</p>

      <ol>
        <li>
          <Link to="/?location=Sintra">Sintra</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brasil</Link>
        </li>
      </ol>
   </div>
  )
};

module.exports = Examples;
