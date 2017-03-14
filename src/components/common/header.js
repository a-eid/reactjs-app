import React , {PropTypes} from 'react'
import {Link , IndexLink} from 'react-router'

const Header = (props)=>(
  <nav>
      <IndexLink to='/' activeClassName='active'> Home </IndexLink> |
      <Link to='/about' activeClassName='active'> ABout </Link> |
      <Link to='/courses' activeClassName='active'> Courses </Link>
  </nav>
)

export default Header