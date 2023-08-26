import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import Header2 from '../Header/Header2'

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showDietTable, setShowDietTable] = useState(false);
  const [showExerciseTable, setShowExerciseTable] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [dietData, setDietData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const userid= sessionStorage.getItem('user')
  useEffect(() => {
    fetchUserProfile();
    fetchDietData();
    fetchExerciseData();
  }, []);

  const fetchUserProfile = async () => {
    try {
      console.log(userid);
      const response = await axios.get('http://localhost:8080/users/getUser/'+userid); 
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchDietData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/diet/getDiet/{userid}'); 
      setDietData(response.data);
    } catch (error) {
      console.error('Error fetching diet data:', error);
    }
  };

  const fetchExerciseData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/workout/getWorkoutById/{user_id}'); 
      setExerciseData(response.data);
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowDietTable(false);
    setShowExerciseTable(false);
  };

  const handleDietClick = () => {
    setShowProfile(false);
    setShowDietTable(true);
    setShowExerciseTable(false);
  };

  const handleExerciseClick = () => {
    setShowProfile(false);
    setShowDietTable(false);
    setShowExerciseTable(true);
  };

  return (
    <div>
      <Header2/>
    <div className="gym-user-container">
      <div className="button-container">
        <button onClick={handleProfileClick}>Profile</button>
        <button onClick={handleDietClick}>Diet Table</button>
        <button onClick={handleExerciseClick}>Exercise Table</button>
      </div>

      {showProfile && (
        <div className="profile-user">
          <h2>User Profile</h2>
          <p>{userProfile.profile_pic}</p>
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
          <h2>User Diet Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Protein</th>
                <th>Carbohydrates</th>
                <th>Fats</th>
                <th>Calories</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dietData.map(item => (
                <tr key={item.user_id}>
                  <td>{item.nutrition.nutri_name}</td>
                  <td>{item.nutrition.fat}</td>
                  <td>{item.nutrition.calories}</td>
                  <td>{item.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showExerciseTable && (
        <div className="exercise-table">
          <h2>User Exercise Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Repetations</th>
                <th>Sets</th>
                <th>Rest</th>
                {/* <th>Month</th> */}
              </tr>
            </thead>
            <tbody>
              {exerciseData.map(item => (
                <tr key={item.user_id}>
                  <td>{item.sets}</td>
                  <td>{item.repetations}</td>
                  <td>{item.sets}</td>
                  <td>{item.rest}</td>
                  {/* <td>{item.month}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>  
    </div>
  );
};

export default UserProfile;
