import React , {Component , PropTypes} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/course-actions'
import {bindActionCreators} from 'redux'
import CourseForm from './course-form'
import toastr from 'toastr'


class ManageCoursePage extends Component {
  constructor(props , context){
    super(props , context)
    this.state = {
      course: Object.assign({} , props.course),
      errors: {},
      saving: false 
    }
    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  updateCourseState(event){
    const field = event.target.name
    let course = this.state.course
    course[field] = event.target.value
    return this.setState({course: course})
  }

  saveCourse(event){
    event.preventDefault()
    this.setState({ saving: true })
    this.props.actions.saveCourse(this.state.course).then(() => {
      toastr.success('course saved')
      this.setState({saving: false})
      this.context.router.push('/courses')
    }).catch( error => {
      toastr.error(error)
      this.setState({saving: false})
    })
  }

  render(){
    return(
      <div>
        <h1>Manage Course</h1>
        <CourseForm 
          onChange={this.updateCourseState}
          allAuthors={this.props.allAuthors}
          onSave={this.saveCourse}
          course={this.state.course} 
          errors={this.state.errors}
          saving={this.state.saving} />
      </div>
    )
  }
  
  componentWillReceiveProps (nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({ course: nextProps.course })
    }
  }
}

// pull router conetxt so that router is available on this.context.router
// what is context : basically a global var 
ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

function getCourseById(courses , id){
  return courses.filter( course => course.id == id )[0] || null 
}

function mapStateToProps(state , ownProps){
  var course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''}
  var courseId = ownProps.params.id; 
  if(courseId && state.courses.length > 0)
      course = getCourseById( state.courses , courseId )

  const authorFormattedForDropdown = state.authors.map((author) => ({
    value: author.id , 
    key: author.id , 
    text: author.firstName + " " + author.lastName
  }))

  return {
    allAuthors: authorFormattedForDropdown,
    course: course
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(courseActions , dispatch) 
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(ManageCoursePage)