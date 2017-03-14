import * as types from './action-types'

export function beginAjaxCall(){
  return { type: types.BEGIN_AJAX_CALL }
}