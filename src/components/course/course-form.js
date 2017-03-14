import React from 'react'
import TextInput from '../common/text-input'
import SelectInput from '../common/select-input'
import {Link} from 'react-router'

const CourseForm = ( { course , allAuthors , onSave , onChange , errors , saving })=>(
  <form action="">
  {console.log(saving , 'saving')}
    <TextInput 
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title} />

    <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId}
      defaultOption="select author"
      options={allAuthors}
      onChange={onChange}
      error={errors.authorId} />

    <TextInput 
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category} />

    <TextInput 
      name="length"
      label="Length"
      value={course.length}
      onChange={onChange}
      error={errors.length} />

    <input 
      type="submit"
      disabled={saving}
      value={saving ? 'saving ....' : 'save'}
      className='btn btn-primary'
      onClick={onSave} />
    <Link 
      type="submit"
      disabled={saving}
      className='btn btn-primary'
      to="/courses"> { saving ? 'wait ....' : 'back'} </Link>
  </form>)


export default CourseForm