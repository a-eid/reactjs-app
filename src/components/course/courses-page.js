import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/course-actions.js'
import CourseList from './course-list'
import {bindActionCreators} from 'redux'

class CoursePage extends Component{
  
  constructor(props , context){
    super(props , context)
  }


  courseRow(course , index){
    return <div key={index}>{course.title}</div>
  }
  render(){
    return(
      <CourseList courses={this.props.courses} />
    )
  }
}

function mapStateToProps(state , ownProps){
  return {
    // returns the properties that we would like to see exposed on our component
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(courseActions , dispatch)
  }
}


export default connect( 
  mapStateToProps , 
  mapDispatchToProps
)(CoursePage)