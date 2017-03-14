import { combineReducers } from 'redux'
import courses from './course-reducer'
import authors from './author-reducer'
import ajaxStatusReducer from './ajax-status-reducer'

const reducer = combineReducers({
  courses : courses , 
  authors : authors , 
  ajaxCallsInProgress : ajaxStatusReducer 
})

export default reducer