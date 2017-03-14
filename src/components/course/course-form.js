import React from 'react'
import TextInput from '../common/text-input'
import SelectInput from '../common/select-input'

const CourseForm = ( { course , allAuthors , onSave , onChange , loading , errors} )=>(
  <form action="">
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
      disabled={loading}
      value={loading ? 'saving ....' : 'save'}
      className='btn btn-primary'
      onClick={onSave} />
  </form>)

export default CourseForm