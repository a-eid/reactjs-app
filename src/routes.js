import React from 'react'
import {Route , IndexRoute} from 'react-router'
import App from './components/App'
import AboutPage from './components/about/about-page'
import HomePage from './components/home/home-page'
import CoursePage from './components/course/courses-page'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/about' component={AboutPage} /> 
    <Route path='/courses' component={CoursePage} /> 
  </Route>
)