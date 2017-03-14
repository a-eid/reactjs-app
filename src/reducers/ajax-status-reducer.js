import * as types from '../actions/action-types.js'
import initialState from './initial-state'

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8 ) == '_SUCCESS'
}

export default function ajaxStatusReducer( state = initialState.ajaxCallsInProgress , action ){
  if(action.type == types.BEGIN_AJAX_CALL)
    return state + 1 
  else if(actionTypeEndsInSuccess(action.type))
    return state - 1

  return state 
}