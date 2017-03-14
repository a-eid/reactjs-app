import * as types from '../actions/action-types'
import initialState from './initial-state'

export default function courseReducer(state = initialState.courses , action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state , action.course
      ] 
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course)=> course.id !== action.course.id) , 
        action.course
      ] 
    default:
      return state
  }
}