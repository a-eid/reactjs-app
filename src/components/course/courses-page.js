import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/course-actions.js'
import CourseList from './course-list'

class CoursePage extends Component{
  
  constructor(props , context){
    super(props , context)
    
    // state will be handles with redux .

    // this.state = {
    //   course:{ title: "" }
    // } 


    // this.onTitleChange = this.onTitleChange.bind(this)
    // this.onClickSave = this.onClickSave.bind(this)
  }

  // onTitleChange(e){
  //   const title = e.target.value
  //   this.setState({
  //     course: {
  //       title: title
  //     }
  //   })
  // }

  // onClickSave(e){
  //   this.props.addCourse(this.state.course)
  //   this.setState({
  //     course:{
  //       title: ""
  //     }
  //   })
  //   this.titleInput.focus()
  // }

  courseRow(course , index){
    return <div key={index}>{course.title}</div>
  }
  render(){
    return(
      // <div>
      //   <h2>Add Course</h2>
      //   <input ref={(input) => { this.titleInput = input }} 
      //     type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
      //   <input type="submit" onClick={this.onClickSave} value="save" />
      //   <hr/>
/*
      <div>
        <AddCourse />
        <hr/>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
*/

      <CourseList courses={this.props.courses} />
    )
  }

  componentDidMount(){
    // this.titleInput.focus()
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
    addCourse: course => dispatch(courseActions.createCourse(course))
  }
}


export default connect( 
  mapStateToProps , 
  mapDispatchToProps
)(CoursePage)