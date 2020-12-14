PropTypes are used to define which type of data prop should accept.

PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 
prop-types is a pkg that provided by react community, we need to dwnload it using npm i to use in our app.

this propType chek will be very useful for other devs when they look at your code.

import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};


In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 
For performance reasons, propTypes is only checked in development mode.

