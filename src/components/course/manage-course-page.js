import React , {Component} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/course-actions'
import {bindActionCreators} from 'redux'

class ManageCoursePage extends Component {
  constructor(props , context){
    super(props , context)
  }
  render(){
    return(
      <div>
        {this.props.params.name}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(ManageCoursePage)