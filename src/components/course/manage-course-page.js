import React , {Component} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/course-actions'
import {bindActionCreators} from 'redux'
import CourseForm from './course-form'


class ManageCoursePage extends Component {
  constructor(props , context){
    super(props , context)
    this.state = {
      course: Object.assign({} , props.course),
      errors: {}
    }
  }
  render(){
    return(
      <div>
        <h1>Manage Course</h1>
        <CourseForm 
          course={this.state.course} 
          errors={this.state.errors}
          allAuthors={[]}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    course : {
      id:'',
      watchHref:'',
      title:'',
      authorId:'',
      length:'',
      category:''
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(ManageCoursePage)