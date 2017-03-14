import * as types from '../actions/action-types.js'
import initialState from './initial-state'

// function actionTypeEndsInSuccess(type){
//   return type.substring(type.length - 8 ) == '_SUCCESS'
// }

export default function ajaxStatusReducer( state = initialState.ajaxCallsInProgress , action ){
 console.log(state , 'state init # ajax calls')
  switch(action.type){
    case types.BEGIN_AJAX_CALL : 
      console.log('begin an ajax call')
      return state + 1 
    case types.AJAX_CALL_ERROR : 
      console.log('ajax call faild')
      return state - 1
    case types.LOAD_COURSES_SUCCESS:
    case types.LOAD_AUTHORS_SUCCESS:
    case types.UPDATE_COURSE_SUCCESS:
    case types.CREATE_COURSE_SUCCESS:
      return state - 1
    default:
      // if(actionTypeEndsInSuccess(action.type))
      //   console.log('success ajax call')
      //   return state - 1
      return state 
  }
}