import React, { Component , PropTypes } from 'react';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div className="container col-md-8 col-md-offset-2">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
