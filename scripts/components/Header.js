var React = require('react');

var Header = React.createClass({
	render : function() {
		return (
			<header>
        <h1 className="intro-headline">securityweek.ly</h1>
        <p className="intro-text">A free weekly newsletter with the best selection of IT Security news and articles.</p>
      </header>  
		)
	}
});

export default Header;