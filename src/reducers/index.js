import { combineReducers } from 'redux'
import courses from './course-reducer'
import authors from './author-reducer'

const reducer = combineReducers({
  courses : courses , 
  authors : authors
})

export default reducer