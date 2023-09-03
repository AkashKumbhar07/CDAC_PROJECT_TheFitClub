import React, { useState } from 'react';
import './Add.css';

function Add() {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [rest, setRest] = useState('');

  const handleAddExercise = () => {
    if (exercise && sets && repetitions && rest) {
      setExercises([...exercises, { exercise, sets, repetitions, rest }]);
      setExercise('');
      setSets('');
      setRepetitions('');
      setRest('');
    }
  };

  return (
    <div className="container-add">
      <h1 className={'/h1-add'}>  Exercise Table</h1>
      <table id="exercise-table">
        <thead>
          <tr>
            <th className='th-add'>Exercise</th>
            <th className='th-add'>Sets</th>
            <th className='th-add'>Repetitions</th>
            <th className='th-add'>Rest (s)</th>
          </tr>
        </thead>
        <tbody>
          {/* {exercises.map((exercise, index) => ( */}
            <tr>
              <td className='td-add'>abs</td>
              <td><input type='number'/></td>
              <td><input type='number'/></td>
              <td><input type='number'/></td>
              {/* <td className='td-add'>{exercise.sets}</td>
              <td className='td-add'>{exercise.repetitions}</td>
              <td className='td-add'>{exercise.rest}</td> */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      {/* <div className="form">
        <input 
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise"
          required
        />
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          placeholder="Sets"
          required
        />
        <input
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          placeholder="Repetitions"
          required
        />
        <input
          type="number"
          value={rest}
          onChange={(e) => setRest(e.target.value)}
          placeholder="Rest (s)"
          required
        /> */}
        <button onClick={handleAddExercise}>Add</button>
      </div>
    // </div>
  );
}

export default Add;
