import React from 'react'

function Select(props) {
    const {callSelect} = props
    const handleChange = (e) =>{
        console.log(e.target.value)
        const phrase = e.target.value
        callSelect(phrase)
    }
  return (
    <>
    <div>Filter categories</div>
    <select onChange={handleChange}>
        <option value="none">None</option>
        <option value="nature">Nature</option>
        <option value="technology">Technology</option>
        <option value="foods">Food</option>
        <option value="films">Film</option>
        <option value="apple">Apple</option>
        <option value="health">Health</option>
    </select>
    </>
  )
}

export default Select