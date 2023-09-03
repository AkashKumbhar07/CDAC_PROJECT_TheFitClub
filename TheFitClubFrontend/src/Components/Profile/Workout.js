import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Workout.css';

const Workout = () => {
  const { userId } = useParams();
  const [exerciseData, setExerciseData] = useState([]);
  const [workout , setWorkout] = useState([])
  const Navigate= useNavigate();
  useEffect(() => {
    fetchExerciseData();
  }, []);
  sessionStorage.setItem('wuid',userId);
  const fetchExerciseData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/workout/getWorkoutById/${userId}`);
      setExerciseData(response.data);
      
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  

  const handleDeleteClick = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/workout/deleteWorkout/${itemId}`);
      setWorkout(response.data);
      fetchExerciseData();
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  const backhandler = async ()=>{
      sessionStorage.removeItem('wuid');
      const tr=sessionStorage.getItem('trainer')
      Navigate(`/TrainerDB/${tr}`)
    
  }

  return (
    <div>
      <h2>User Workout Details</h2>
      <Link to={`/addForm/${userId}`}>
                <button type="button" name="btn" id="btn" >ADD</button>  
                </Link>
                <button type="button" name="btn" id="btn" onClick={backhandler}>Back</button>     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Repetitions</th>
            <th>Rest</th>
            <th>Phase</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.map(item => (
            <tr key={item.user_id}>
              <td>{item.exercise_name}</td>
              <td>{item.sets}</td>
              <td>{item.repetations}</td>
              <td>{item.rest}</td>
              <td>{item.phase}</td>
              <td>
              <Link to={`/editForm/${item.workout_id}`}>
                <button type="button" name="btn" id="btn" className="btn btn-primary">Update</button>  
                </Link>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(item.workout_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workout;
