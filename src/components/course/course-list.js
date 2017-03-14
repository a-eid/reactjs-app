import React from 'react'
import {Link} from 'react-router'

const CourseList = ({courses})=>(
  <div>
    <hr/>
    <h1>Courses</h1>
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