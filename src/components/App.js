import React, { Component , PropTypes } from 'react';
import Header from './common/header'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="container col-md-8 col-md-offset-2">
        <Header loading = {this.props.loading} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
var i = 0 
function mapStateToProps(state , ownProps){
  console.log(state , 'state' + i++)
  return {
    loading: state.ajaxCallsInProgress > 0 
  }
}

export default connect(mapStateToProps)(App)
