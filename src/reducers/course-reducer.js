import * as types from '../actions/action-types'
import initialState from './initial-state'

export default function courseReducer(state = initialState.courses , action){
  switch(action.type){
    case types.CREATECOURSE:
      return [...state , action.course]
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state
  }
}