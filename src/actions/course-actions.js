import * as types from './action-types'
import CourseApi from '../api/mock-course-api'

export function createCourse(course){
  return {
    type: types.CREATECOURSE , 
    course : course
  }
}

export function loadCoursesSuccess(courses){
  return {
    type: types.LOADALLCOURSES , 
    courses: courses 
  }
}

// thunks : delay dispatching of actions 
export function loadCourses(){
  console.log('loadcourses')
  return function(dispatch){
    console.log('loadcourses  return dispatch')
    CourseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses))
    }).catch( error => { throw(error) })
  }
}
