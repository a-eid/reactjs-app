// creating updating and deleting authors
import * as types from './action-types'
import AuthorApi from '../api/mock-author-api'

export function loadAuthorsSuccess(authors){
  return {
    type: types.LOAD_AUTHORS_SUCCESS , authors: authors
  } 
}

export function loadAuthors(){
  return (dispatch) => {
    return AuthorApi.getAllAuthors().then((authors)=>{
      dispatch(loadAuthorsSuccess(authors))
    }).catch((error)=>{
      thorw(error)
    })
  }
}