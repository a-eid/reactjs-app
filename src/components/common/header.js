import React , {PropTypes} from 'react'
import {Link , IndexLink} from 'react-router'
import LoadingDots from './loading-dots'

const Header = ({loading})=>(
  <nav>
      <IndexLink to='/' activeClassName='active'> Home </IndexLink> |
      <Link to='/about' activeClassName='active'> ABout </Link> |
      <Link to='/courses' activeClassName='active'> Courses </Link>
      {console.log(loading , 'loading')}
      {loading && <LoadingDots interval={100} dots={20}/>}
  </nav>
)

export default Header