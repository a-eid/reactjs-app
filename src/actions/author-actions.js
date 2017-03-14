// creating updating and deleting authors
import * as types from './action-types'
import AuthorApi from '../api/mock-author-api'
import {beginAjaxCall} from './ajax-status-actions'

export function loadAuthorsSuccess(authors){
  return {
    type: types.LOAD_AUTHORS_SUCCESS , authors: authors
  } 
}

export function loadAuthors(){
  return (dispatch) => {
    dispatch(beginAjaxCall())
    return AuthorApi.getAllAuthors().then((authors)=>{
      dispatch( loadAuthorsSuccess(authors) )
    }).catch((error)=>{
      throw(error)
    })
  }
}