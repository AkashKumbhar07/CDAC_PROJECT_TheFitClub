import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Workout.css';

const Diet = () => {
  const { userId } = useParams();
  const [dietData, setdietData] = useState([]);
  const [nutrition , setnutrition] = useState([])
  const Navigate= useNavigate();
  useEffect(() => {
    fetchdietData();
  }, []);
  sessionStorage.setItem('wuid',userId);
  const fetchdietData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/diet/getDiet/${userId}`);
      console.log(response.data)
      setdietData(response.data);
      
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  

  const handleDeleteClick = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/diet/deleteDiet/${itemId}`);
      setnutrition(response.data);
      fetchdietData();
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
      <h2>User nutrition Details</h2>
      <Link to={`/addNutri/${userId}`}>
                <button type="button" name="btn" id="btn" >ADD</button>  
                </Link>
                <button type="button" name="btn" id="btn" onClick={backhandler}>Back</button>     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Protien(gm)</th>
            <th>Carbohydrates(gm)</th>
            <th>Fat(gm)</th>
            <th>Calories(gm)</th>
            <th>Quantity(gm)</th>
            <th>Meal</th>
            <th>Phase</th>
            
          </tr>
        </thead>
        <tbody>
          {dietData.map(item => (
            <tr key={item.diet_id}>
              <td>{item.nutri_name}</td>
              <td>{item.protein}</td>
              <td>{item.carbohydrates}</td>
              <td>{item.fat}</td>
              <td>{item.calories}</td>
              <td>{item.quantity}</td>
              <td>{item.meal}</td>
              <td>{item.phase}</td>
              <td>
                <button onClick={() => handleDeleteClick(item.diet_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diet;
