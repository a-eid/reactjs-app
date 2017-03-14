import React from 'react'
import {Link , browserHistory} from 'react-router'

const redirectToAddCourePage = ()=>{
  browserHistory.push('/course')
}

const CourseList = ({courses})=>(
  <div>
    <h1>Courses</h1>

    <input type="submit"
    value="add course"
    className= "btn btn-primary"
    onClick={redirectToAddCourePage}/>

    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        { courses.map(courseRow) }
      </tbody>
    </table>
  </div>
)

const courseRow = (course , index) => (
  <tr key={course.id}>
    <td><a href={course.watchHref} target="_bland">watch</a></td>
    <td><Link to={'/course/' + course.id }>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
)

export default CourseList