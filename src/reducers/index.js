import { combineReducers } from 'redux'
import courses from './course-reducer'
import authors from './author-reducer'
import ajaxCallsInProgress from './ajax-status-reducer'

const reducer = combineReducers({
  courses : courses , 
  authors : authors , 
  ajaxCallsInProgress : ajaxCallsInProgress 
})

export default reducer