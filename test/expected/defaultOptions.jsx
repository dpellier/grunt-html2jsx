var React = require('react');
var File1Html = React.createClass({
  render: function() {
    return (

      <div>
        <super-button />
      </div>
    );
  }
});
var File2Html = React.createClass({
  render: function() {
    return (

      <p>
        <span>Hello World</span>
      </p>
    );
  }
});
module.exports = {file1:File1Html,file2:File2Html};