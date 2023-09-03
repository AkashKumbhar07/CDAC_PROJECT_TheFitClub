import React, { useState } from 'react';
import axios from 'axios';
import {  useParams, useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const { userId } = useParams();
  const Navigate= useNavigate();
  const user = sessionStorage.getItem('wuid');
 
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [rest, setRest] = useState('');
  const [phase, setPhase] = useState('');

  const handleAddWorkout = async () => {
    try {
      const workoutData = {
        exercise_name: exerciseName,
        sets: sets,
        repetations: repetitions,
        rest: rest,
        phase: phase,
        user_id:user
      };

      await axios.post(`http://localhost:8080/workout/addWorkout`, workoutData);
      console.log(workoutData)
      Navigate(`/workout/${user}`);
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <form>
        <div>
          <label>Exercise Name:</label>
          <input type="text" value={exerciseName} onChange={e => setExerciseName(e.target.value)} />
        </div>
        <div>
          <label>Sets:</label>
          <input type="text" value={sets} onChange={e => setSets(e.target.value)} />
        </div>
        <div>
          <label>Repetitions:</label>
          <input type="text" value={repetitions} onChange={e => setRepetitions(e.target.value)} />
        </div>
        <div>
          <label>Rest:</label>
          <input type="text" value={rest} onChange={e => setRest(e.target.value)} />
        </div>
        <div>
          <label>Phase:</label>
          <input type="text" value={phase} onChange={e => setPhase(e.target.value)} />
        </div>
        <button type="button" onClick={handleAddWorkout}>Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
