import * as types from '../actions/action-types'
import initialState from './initial-state'

export default function authorReducer(state = initialState.authors , action){
  // console.log(action)
  switch(action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors // don't need to keep prev state . 
    default:
      return state
  }
}