import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateWorkout = () => {
  const { workoutId } = useParams();
  const navigate = useNavigate();
   


  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [rest, setRest] = useState('');
  const [phase, setPhase] = useState('');

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  const fetchWorkoutData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/workout/getWorkoutByWid/${workoutId}`);
      console.log(response.data)
      if (response && response.data) {
        const workout = response.data[0];
        setExerciseName(workout.exercise_name);
        setSets(workout.sets);
        setRepetitions(workout.repetations);
        setRest(workout.rest);
        setPhase(workout.phase);
      }
    } catch (error) {
      console.error('Error fetching workout data:', error);
    }
  };

  const handleUpdateWorkout = async () => {
    try {
      const updatedWorkoutData = {
        exercise_name: exerciseName,
        sets: sets,
        repetations: repetitions,
        rest: rest,
        phase: phase,
      };

      await axios.put(`http://localhost:8080/workout/updateWorkout/${workoutId}`, updatedWorkoutData);
      const workuid=sessionStorage.getItem('wuid')
      navigate(`/workout/${workuid}`)
      
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  return (
    <div>
      <h2>Update Workout</h2>
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
        <button type="button" onClick={handleUpdateWorkout}>Update Workout</button>
      </form>
    </div>
  );
};

export default UpdateWorkout;
