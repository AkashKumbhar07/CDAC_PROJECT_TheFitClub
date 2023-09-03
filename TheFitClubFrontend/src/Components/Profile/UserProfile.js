import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import Header2 from '../Header/Header2';

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showDietTable, setShowDietTable] = useState(false);
  const [showExerciseTable, setShowExerciseTable] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [dietData, setDietData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [measurementData, setMeasurementData] = useState([]);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateChest, setUpdateChest] = useState('');
  const [updateArm, setUpdateArm] = useState('');
  const [updateWaist, setUpdateWaist] = useState('');
  const [updateThigh, setUpdateThigh] = useState('');
  const [updateCalf, setUpdateCalf] = useState('');
  
  const d = new Date()
          const day = d.getDate();
          const month = d.getMonth()+1;
          const year = d.getFullYear();
          const res = year+"-"+month+"-"+day

  const uid = sessionStorage.getItem('userid');
  const loginid= sessionStorage.getItem('user')

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/getUser/'+loginid);
      console.log(loginid)
      setUserProfile(response.data);
      sessionStorage.setItem('userid',JSON.stringify(response.data.user_id))
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchDietData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/diet/getDiet/' + uid);
      setDietData(response.data);
    } catch (error) {
      console.error('Error fetching diet data:', error);
    }
  };

  const fetchExerciseData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/workout/getWorkoutById/' + uid);
      setExerciseData(response.data);
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  const fetchMeasurementData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/getUserMeasurements/' + uid);
      // var arr =([response.data]); 
      console.log(response.data)
      setMeasurementData(response.data); // Access the 'measurements' property
      // console.log(arr);
    } catch (error) {
      console.error('Error fetching measurement data:', error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      // Prepare the data to send to the backend
      const updatedMeasurement = {
        chest: updateChest,
        arm: updateArm,
        waist: updateWaist,
        thigh: updateThigh,
        calf: updateCalf,
        user_id: uid
      };
      // Send the updated measurement data to the backend
      await axios.put(`http://localhost:8080/users/updateMeasurement/${uid}`, updatedMeasurement);

      console.log(updatedMeasurement);
      setShowUpdateForm(true);
    } catch (error) {
      console.error('Error updating measurement data:', error);
    }
  };

  const handleUpdateClick = () => {
    console.log(res)
    setShowUpdateForm(true);
    setShowProfile(false);
    setShowDietTable(false);
    setShowExerciseTable(false);
    setShowMeasurements(false);
    // You might want to initialize the input fields with current measurement values
    setUpdateChest('');
    setUpdateArm('');
    setUpdateWaist('');
    setUpdateThigh('');
    setUpdateCalf('');
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowDietTable(false);
    setShowExerciseTable(false);
    setShowMeasurements(false); 
    setShowUpdateForm(false);
  };

  const handleDietClick = () => {
    fetchDietData();
    setShowProfile(false);
    setShowDietTable(true);
    setShowExerciseTable(false);
    setShowMeasurements(false); 
    setShowUpdateForm(false);
  };

  const handleExerciseClick = () => {
    fetchExerciseData();
    setShowProfile(false);
    setShowDietTable(false);
    setShowExerciseTable(true);
    setShowMeasurements(false);
    setShowUpdateForm(false);
  };

  const handleMeasurementClick = async () => {
    await fetchMeasurementData();
    setShowProfile(false);
    setShowDietTable(false);
    setShowExerciseTable(false);
    setShowMeasurements(true);
    setShowUpdateForm(false);
  };


  return (
    <div>
      <Header2 />
      <div className="gym-user-container">
        <div className="button-container">
          <button onClick={handleProfileClick}>Profile</button>
          <button onClick={handleDietClick}>Diet </button>
          <button onClick={handleExerciseClick}>Exercise </button>
          <button onClick={handleUpdateClick}>Update Measurement</button>
          <button onClick={handleMeasurementClick}>Progress</button>
          
        </div>

        {showProfile && (
  <div className="profile-user">
    <h2>Profile</h2>
    <p>Name: {userProfile.name}</p>
    <p>Weight: {userProfile.weight}</p>
    <p>Fitness Goals: {userProfile.fitnessGoal}</p>
    <p>DOB: {userProfile.dob}</p>
    <p>Gender: {userProfile.gender}</p>
    <p>Email: {userProfile.email}</p>
    <p>City: {userProfile.city}</p>
    <p>Country: {userProfile.country}</p>
    
  </div>
)}

{showDietTable && (
  <div className="diet-table">
    <h2>Diet</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Protein</th>
          <th>Carbohydrates</th>
          <th>Fats</th>
          <th>Calories</th>
          <th>Quantity</th>
          <th>Meal</th>
          <th>Phase</th>
        </tr>
      </thead>
      <tbody>
        {dietData.map(item => (
          <tr key={item.user_id}>
            <td>{item.nutri_name}</td>
            <td>{item.protein}</td>
            <td>{item.carbohydrates}</td>
            <td>{item.fat}</td>
            <td>{item.calories}</td>
            <td>{item.quantity}</td>
            <td>{item.meal}</td>
            <td>{item.phase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{showExerciseTable && (
  <div className="exercise-table">
    <h2> Exercise </h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Repetitions</th>
          <th>Sets</th>
          <th>Rest</th>
          <th>Phase</th>
        </tr>
      </thead>
      <tbody>
        {exerciseData.map(item => (
          <tr key={item.user_id}>
            <td>{item.exercise_name}</td>
            <td>{item.repetations}</td>
            <td>{item.sets}</td>
            <td>{item.rest}</td>
            <td>{item.phase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{showMeasurements && (
  <div className="measurement-table">
    <h2>Measurement Data</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Chest</th>
          <th>Arm</th>
          <th>Waist</th>
          <th>Thigh</th>
          <th>Calf</th>
          
        </tr>
      </thead>
      <tbody>
        {measurementData.map(item => (
          <tr key={item.mesurement_id}>
            <td>{item.mdate}</td>
            <td>{item.chest}</td>
            <td>{item.arm}</td>
            <td>{item.waist}</td>
            <td>{item.thigh}</td>
            <td>{item.calf}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{showUpdateForm && (
          <div className="update-measurement-form">
            <h2>Update Measurement</h2>
            <div className="measurement-input">
              <label htmlFor="chest">Chest:</label>
              <input
                type="number"
                id="chest"
                required
                value={updateChest}
                onChange={(e) => setUpdateChest(e.target.value)}
              />
            </div>
            <div className="measurement-input">
              <label htmlFor="arm">Arm:</label>
              <input
                type="number"
                id="arm"
                required
                value={updateArm}
                onChange={(e) => setUpdateArm(e.target.value)}
              />
            </div>
            <div className="measurement-input">
              <label htmlFor="waist">Waist:</label>
              <input
                type="number"
                id="waist"
                required
                value={updateWaist}
                onChange={(e) => setUpdateWaist(e.target.value)}
              />
            </div>
            <div className="measurement-input">
              <label htmlFor="thigh">Thigh:</label>
              <input
                type="number"
                id="thigh"
                required
                value={updateThigh}
                onChange={(e) => setUpdateThigh(e.target.value)}
              />
            </div>
            <div className="measurement-input">
              <label htmlFor="calf">Calf:</label>
              <input
                type="number"
                id="calf"
                required
                value={updateCalf}
                onChange={(e) => setUpdateCalf(e.target.value)}
              />
            </div>
            <button onClick={handleUpdateSubmit}>Update</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserProfile;
