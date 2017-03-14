import React from 'react'

const SelectInput = ({name , label , onChange , defaultOption , options , value , error}) => (
  <div className='form-group'>
    <label htmlFor={name}>{label}</label>
    <div className='field'>
      <select type="text"
        name={name}
        className='form-control'
        value={value}
        onChange={onChange}>
        <option value="">{defaultOption}</option>
        {options.map((option)=>(
          <option value={option.value} key={option.key}> {option.text} </option>
        ))}
        </select>
        {error && <div className="alert alert-danger" >{error}</div>}
    </div>
  </div>
)

export default SelectInput 