import React , {Component} from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  render(){
    return(
      <div className="jumbotron">
        <h1>Pluralsight Adminstration</h1>
        <p>React , Redux and react-router in ES6 for ultra responsive websites</p>
        <Link to="about" className="btn btn-lg button-primary">learn more</Link>
      </div>
    )
  }
}

export default HomePage





























