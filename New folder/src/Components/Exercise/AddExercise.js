import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import "./Exercise.css" 
import { Link } from 'react-router-dom'

const AddExercise = () => {
  return (
    <div >
        <Link className='link-button' to={'/AddExercise'}>Add Exercise</Link>
        <table class="table">
  <thead className='table-h'>
    <tr>
      <th>Exercise</th>
      <th>Sets</th>
      <th>Repetations</th>
      <th>Rest</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='table-b'>
    <tr>
      <th>---------------</th>
      <td>---------------</td>
      <td>---------------</td>
      <td>---------------</td>
      <td><Link to={"/update-exercise"} className='link-button'>Update</Link>
        <button className='link-button' style={{marginLeft:"10px"}}>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default AddExercise
