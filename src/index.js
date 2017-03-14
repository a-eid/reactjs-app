import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'
import {loadCourses} from './actions/course-actions'
import routes from './routes';
import {Router , browserHistory} from 'react-router'
import './styles/styles.css'


const store = configureStore()
store.dispatch(loadCourses())

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider> , document.getElementById('root')
);