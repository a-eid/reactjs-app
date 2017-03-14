import * as types from '../actions/action-types'

export default function courseReducer(state = [] , action){
  switch(action.type){
    case types.CREATECOURSE:
      return [...state , action.course]
    case types.LOADALLCOURSES:
      return action.courses
    default:
      return state
  }
}