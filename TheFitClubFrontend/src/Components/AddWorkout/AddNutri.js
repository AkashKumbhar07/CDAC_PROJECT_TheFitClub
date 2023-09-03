import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddNutri() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [meal, setMeal] = useState('')
    const [phase, setPhase] = useState('')
    const user = sessionStorage.getItem('wuid')
    const Navigate= useNavigate();
    
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/diet/dietSearch/${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleAddToDiet = async (nutrition, index) => {
        const updatedNutrition = { ...nutrition };
        updatedNutrition.calories = parseInt((updatedNutrition.calories * updatedNutrition.quantity) / 100);
        updatedNutrition.protein = parseInt((updatedNutrition.protein * updatedNutrition.quantity) / 100);
        updatedNutrition.fat = parseInt((updatedNutrition.fat * updatedNutrition.quantity) / 100);
        updatedNutrition.carbohydrates = parseInt((updatedNutrition.carbohydrates * updatedNutrition.quantity) / 100);
         
        const data={
            quantity: updatedNutrition.quantity,
            nutri_name:updatedNutrition.nutri_name,
            calories:updatedNutrition.calories,
            fat:updatedNutrition.fat,
            protein: updatedNutrition.protein,
            carbohydrates: updatedNutrition.carbohydrates,
            meal:meal,
            phase:phase,
            user_id: user
        }
        try {
            console.log(data)
          await axios.post(`http://localhost:8080/diet/addDiet/${user}`, data);
          console.log('Updated result posted successfully');
          alert("Added Successfully!!!")
        } catch (error) {
          console.error('Error posting updated result:', error);
        }
      };
  
    const handleQuantityChange = (event, index) => {
        const updatedResults = [...searchResults];
        updatedResults[index].quantity = parseInt(event.target.value);
        setSearchResults(updatedResults);
      }; 
    const backbutton =() =>{
        Navigate(`/diet/${user}`)
    }
  
    return (
      <div>
        <button onClick={backbutton}> GO BACK</button>
        <h1>Nutrition</h1>
        
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
  
        <div>
          <h2>Search Results</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Carbs</th>
                <th>Quantity</th>
                <th>Meal</th>
                <th>Phase</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
            {searchResults.map((nutrition, index) => (
              <tr key={nutrition.nutrition_id}>
                <td>{nutrition.nutri_name}</td>
                <td>
                  <input
                    type="number"
                    value={parseInt((nutrition.calories * nutrition.quantity) / 100)}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={parseInt((nutrition.protein * nutrition.quantity) / 100)}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={parseInt((nutrition.fat * nutrition.quantity) / 100)}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={parseInt((nutrition.carbohydrates * nutrition.quantity) / 100)}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={nutrition.quantity || ''}
                    onChange={(e) => handleQuantityChange(e, index)}
                  />
                </td>
                    <td>
                    <input 
                    type="number"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                   />
                    </td>
                    <td>
                    <input 
                    type="number"
                    value={phase}
                    onChange={(e) => setPhase(e.target.value)}
                   />
                    </td>
                <td>
                  <button onClick={() => handleAddToDiet(nutrition, index)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
     
  );
}

export default AddNutri