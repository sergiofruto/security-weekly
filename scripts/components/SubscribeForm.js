var React = require('react');

var SuscribeForm = React.createClass({
  render : function() {
    return (
      <div className="subscribe">
        <input className="input-email" type="email" name="email" value="you@email.com" />
        <input className="input-submit" type="submit" value="Subscribe Now" />
      </div>
    )
  }
});

export default SuscribeForm;