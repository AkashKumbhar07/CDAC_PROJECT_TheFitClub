import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './TrainerDashboard.css'; 
import Header3 from '../Header/Header3'
const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [trainerProfile, setTrainerProfile] = useState(null);
  const [registrationRequests, setRegistrationRequests] = useState([]);

  // useEffect(() => {
  //   fetchClients();
  //   fetchTrainers();
  // }, []);

      useEffect(() => {
        axios.get('http://localhost:8080/trainer/getTrainers')
            .then((response) => {
                setRegistrationRequests(response.data.filter((trainer) => !(trainer.isActive ===1)));
            })
            .catch((error) => {
                console.error('Error fetching registration requests:', error);
            });
    }, []);

    const handleAcceptRequest = (trainer_id) => {
      axios.put(`http://localhost:8080/trainer/accept/${trainer_id}`)
          .then((response) => {
              // Handle the response as needed
              // You can update the UI or show a notification
              // You may also remove the accepted request from the list
              setRegistrationRequests((prevRequests) => prevRequests.filter((request) => request.trainer_id !== trainer_id));
          })
          .catch((error) => {
              console.error('Error accepting registration request:', error);
          });
     };

     const handleRejectRequest = (trainer_id) => {
      axios.delete(`http://localhost:8080/trainer/reject/${trainer_id}`)
          .then(() => {
              // Handle the response as needed
              // You can update the UI or show a notification
              // You may also remove the rejected request from the list
              setRegistrationRequests((prevRequests) => prevRequests.filter((request) => request.trainer_id !== trainer_id));
          })
          .catch((error) => {
              console.error('Error rejecting registration request:', error);
          });
    };

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
      const response = await axios.get('http://localhost:8080/trainer/getTrainersActive');
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
            
            <div>
            <h2>Trainer's Requests</h2>
            <ul>
                {registrationRequests.map((request) => (
                    <li key={request.trainer_id}>
                        {request.name} <br></br> {request.email}
                        <button onClick={() => handleAcceptRequest(request.trainer_id)}>Accept</button>
                        <button onClick={() => handleRejectRequest(request.trainer_id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
           
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
            <button onClick={handleBackClick}>Back to Trainers</button>
            <h3>{selectedTrainer.name}'s Profile</h3>
            <p>DOB: {selectedTrainer.dob}</p>
            <p>Email: {selectedTrainer.email}</p>
            <p>Specialization: {selectedTrainer.specialization}</p>
          </div>
        )}
        {selectedClient && (
          
          <div className="usr-profile">
            <button onClick={handleBackClick}>Back to Clients</button>
            <h3>{selectedClient.name}'s Profile</h3>
            <p>DOB: {selectedClient.dob}</p>
            <p>Email: {selectedClient.email}</p>
            <p>Diet_Preferance: {selectedClient.dietPreference}</p>
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
              <h1>Client's</h1>
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
              <h1>Trainer's</h1>
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
