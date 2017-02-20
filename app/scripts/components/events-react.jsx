var React = require('react');

// var Button = React.createClass({
//   render: function(){
//     return
//
//   }
// });

var Heading = React.createClass({
  getInitialState: function() {
    return {show: false};
  },
  toggleHeading: function(event) {
    
  },
  render: function() {
    var headingHtml = this.state.show ? <h1>Hello!</h1>: null;
    return (
      <div>
        {headingHtml}
         <button onClick={this.toggleHeading}>Click Me</button>;
      </div>

    )
  }
});
