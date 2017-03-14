import * as types from './action-types'
import CourseApi from '../api/mock-course-api'
import {beginAjaxCall} from './ajax-status-actions'

export function createCourse(course){
  return {
    type: types.CREATECOURSE , 
    course : course
  }
}

export function loadCoursesSuccess(courses){
  return {
    type: types.LOAD_COURSES_SUCCESS , 
    courses: courses 
  }
}

export function updateCourseSuccess(course){
  console.log('from update course success')
  return {
    type: types.UPDATE_COURSE_SUCCESS , 
    course: course 
  }
}
export function createCourseSuccess(course){
  console.log('from create course success')
  return {
    type: types.CREATE_COURSE_SUCCESS , 
    course: course
  }
}

// thunks : delay dispatching of actions 
export function loadCourses(){
  return function(dispatch){
    CourseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses))
    }).catch( error => { throw(error) })
  }
}

export function saveCourse(course){
  return function (dispatch , getState){
    dispatch(beginAjaxCall())
    // getState optional .. useful for cases when u wanting to access the redux store and get pieces 
    // of state right here without having to pass it in as a parameter . 
    return CourseApi.saveCourse(course).then( ( course ) => {
      // if there is an id then updatecourse action , if not create course action then . 
      dispatch(beginAjaxCall())
      course.id ? dispatch(updateCourseSuccess(course)) : 
        dispatch(createCourseSuccess(course))
    }).catch(error => { throw error })
  }
}
