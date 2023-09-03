import React,{useState} from 'react'
import "./Bmr.css"

function Bmr() {

  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmrResult, setBMRResult] = useState(0);

  const calculateBMR = () => {
    if (gender === 'male' || gender === 'female') {
      let bmr = 0;

      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      setBMRResult(parseInt(bmr));
    }
  };
  return (
    <div className='Bmr'>
         <h1>BMR Calculator</h1>
      <div className='bmr-inner'>
      <label>
        Gender
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Age
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Weight (kg)
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Height (cm)
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBMR} className='btnn'>Calculate BMR</button>
      {bmrResult && <p>Your BMR is: {bmrResult} calories/day</p>}
      </div>
    </div>
  )
}


export default Bmr;
