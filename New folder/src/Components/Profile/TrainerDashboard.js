import React, { useState } from 'react';
import axios from 'axios';
import './TrainerDashboard.css';
import Header3 from '../Header/Header3'

const TrainerDashboard = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [trainerProfile, setTrainerProfile] = useState(null); // State to store trainer profile
  // const trainer_id = sessionStorage.getItem('trainer_id'); // Retrieve the trainer_id from session storage
  const trlogin_id= sessionStorage.getItem('trainer')

  const fetchClients = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/trainer/getUsersByTrainer/${trainerProfile.trainer_id}`);
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };
  
  const fetchTrainerProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/trainer/getTrainer/${trlogin_id}`);
      setTrainerProfile(response.data);
      

    } catch (error) {
      console.error('Error fetching trainer profile:', error);
    }
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleProfileClick = () => {
    fetchTrainerProfile();
  };

  const handleBackClick = () => {
    setSelectedClient(null);
  };

  return (
    <div className='header-dash'>
      <Header3/>
    <div className="trainer-dashboard-container">
      
      <div className="trainer-profile card">
      <h1>Trainer Dashboard</h1>
        <button onClick={handleProfileClick}>Profile</button>
        <button onClick={fetchClients}>Fetch Clients</button>
        <h3>Your Profile</h3>
        {trainerProfile && (
          <div>
            <p>Name: {trainerProfile.name}</p>
            <p>Specialization: {trainerProfile.specialization}</p>
            <p>Experience: {trainerProfile.experience} years</p>
            <p>Bio: {trainerProfile.bio}</p>
            <p>DOB: {trainerProfile.dob}</p>
            <p>City: {trainerProfile.city}</p>
          </div>
        )}
      </div>
      {!selectedClient ? (
        <div className="usr-profile card">
         
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>
                    <button className='bbttnn' onClick={() => handleClientClick(client)}>View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="usr-profile card">
          <button onClick={handleBackClick}>Back to Clients</button>
          <h3>{selectedClient.name}'s Profile</h3>
          <p>Diet Preference: {selectedClient.dietPreference}</p>
          <p>Fitness Goal: {selectedClient.fitnessGoal}</p>
          <p>Weight: {selectedClient.weight}</p>
          <p>DOB: {selectedClient.dob}</p>
          <p>Gender: {selectedClient.gender}</p>
          <p>Email: {selectedClient.email}</p>
          
          <button>Diet</button>
          <button>Workout</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default TrainerDashboard;
