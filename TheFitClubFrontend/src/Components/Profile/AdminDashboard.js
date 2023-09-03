import React, { useState } from 'react';
import axios from 'axios';
import './TrainerDashboard.css'; 
import Header3 from '../Header/Header3'
const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [trainerProfile, setTrainerProfile] = useState(null);

  // useEffect(() => {
  //   fetchClients();
  //   fetchTrainers();
  // }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/getUsers');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/trainer/getTrainers');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setSelectedTrainer(null); // Clear selected trainer
  };

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
    setSelectedClient(null); // Clear selected client
  };

  const handleFetchTrainersClick = async () => {
    fetchTrainers();
    setSelectedTrainer(null);
    setSelectedClient(null);
  };

  const handleFetchClientsClick = async () => {
    fetchClients();
    setSelectedClient(null);
    setSelectedTrainer(null);
  };

  const handleBackClick = () => {
    setSelectedClient(null);
    setSelectedTrainer(null);
  };

  return (
    <div>
      <Header3/>
    <div className="trainer-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="card">
        {!selectedTrainer && !selectedClient ? (
          <div>
            <button onClick={handleFetchClientsClick}>Fetch Clients</button>
            <button onClick={handleFetchTrainersClick}>Fetch Trainers</button>
            
           
            {trainerProfile && (
              <div>
                <p>Name: {trainerProfile.name}</p>
                <p>Specialization: {trainerProfile.specialization}</p>
                <p>Experience: {trainerProfile.experience} years</p>
              </div>
            )}
          </div>
        ) : null}
        {selectedTrainer && (
          <div className="usr-profile">
            <p>Trainer's Profile</p>
            <button onClick={handleBackClick}>Back to Trainers</button>
            <h3>{selectedTrainer.name}'s Profile</h3>
            <p>DOB: {selectedTrainer.dob}</p>
            <p>Email: {selectedTrainer.email}</p>
            <p>Specialization: {selectedTrainer.specialization}</p>
          </div>
        )}
        {selectedClient && (
          
          <div className="usr-profile">
            <p>User's Profile</p>
            <button onClick={handleBackClick}>Back to Clients</button>
            <h3>{selectedClient.name}'s Profile</h3>
            <p>DOB: {selectedClient.dob}</p>
            <p>Email: {selectedClient.email}</p>
            <p>Diet_Preferance: {selectedClient.diet_preferance}</p>
            {/* <button>Diet</button>
            <button>Workout</button> */}
          </div>
        )}
      </div>
      {!selectedTrainer && !selectedClient ? (
        <div className="card">
          {/* Display Clients */}
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
      ) : null}
      {!selectedTrainer && !selectedClient ? (
        <div className="card">
          {/* Display Trainers */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {trainers.map(trainer => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td>
                    <button className='bbttnn' onClick={() => handleTrainerClick(trainer)}>View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default AdminDashboard;
