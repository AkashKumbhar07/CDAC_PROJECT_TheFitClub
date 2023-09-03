import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Registration.css"
import Header2 from '../Header/Header2';

const Registration = () => {
  const [Name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weight, setWeight] = useState('');
  const [fitness_goal, setFitness_goal] = useState('');
  const [diet_preference, setDiet_preference] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [errors, setErrors] = useState({});
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!Name) newErrors.Name = 'Name is required.';
    if (!gender) newErrors.gender = 'gender is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!dob) newErrors.dob = 'Date of Birth is required.';
    if (!phone_no) newErrors.phone_no = 'phone_no is required.';
    if (!city) newErrors.city = 'city is required.';
    if (!country) newErrors.Country = 'Country is required.';
    if (!weight) newErrors.weight = 'weight  is required.';
    if (!fitness_goal) newErrors.fitness_goal = 'Fitness Goal is required.';
    if (!diet_preference) newErrors.diet_preference = 'Diet Preference is required.';
    if (!userName) newErrors.userName ='userName is required';
    if (!password) newErrors.password ='password is required';

    if (Object.keys(newErrors).length === 0) {
      const data = {
        name: Name,
        gender: gender,
        email: email,
        dob: dob,
        phoneNo: phone_no,
        city: city,
        country: country,
        weight: weight,
        fitnessGoal: fitness_goal,
        dietPreference: diet_preference,
        login:{
          userName: userName,
          password: password,
          role: role
        }
      };
      
      axios.post(`http://localhost:8080/users/addUser`,data)
        .then((Response) => {
          alert('Registered Successfully');
          navigate('/login');
          // setUser(Response.data);
        })
        .catch((e) => {
          alert('Already Registered user or invalid data');
          console.log(e)
          setName('');
          setGender('');
          setEmail('');
          setDOB('');
          setPhone_no('');
          setCity('');
          setCountry('');
          setWeight('');
          setFitness_goal('');
          setUserName('');
          setPassword('');
          setRole('');
          navigate('/Register');
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='reg-body'>
      <Header2/>
      <Link to={'/trainerReg'} className='tr-reg-link'> Click here for Trainer Registration</Link>
    <div className="container-reg">
     
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
           Name: <input className='reg-input'
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.Name && <span className="error">{errors.Name}</span>}<br></br>
            Gender: <select   onChange={(e) => setGender(e.target.value)}>
              <option>select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
           {/* Gender: <input className='reg-input'
              type="gender"
              placeholder="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            /> */}
            {errors.gender && <span className="error">{errors.gender}</span>}<br></br>
           Email: <input className='reg-input'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}<br></br>
          DOB: <input className='reg-input'
              type="Date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
            {errors.dob && <span className="error">{errors.dob}</span>}<br></br>
            Contact Number: <input className='reg-input'
              type="text"
              placeholder="phone_no Number"
              value={phone_no}
              onChange={(e) => setPhone_no(e.target.value)}
            />
            {errors.phone_no && <span className="error">{errors.phone_no}</span>}<br></br>
           City: <input className='reg-input'
              type='text'
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <span className="error">{errors.city}</span>}<br></br>
            Country: <input className='reg-input'
              type="text"
              value={country}
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
            />
            {errors.country && <span className="error">{errors.country}</span>}<br></br>
            Weight: <input className='reg-input'
              type="number"
              placeholder="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            {errors.weight && <span className="error">{errors.weight}</span>}<br></br>
            Fitness Goal:<select className='reg-input'  onChange={(e) => setFitness_goal(e.target.value)}>
              <option>select</option>
              <option>Muscle Gain</option>
              <option>Fat Loss</option>
              <option>Weight Loss</option>
            </select>
           
           {/* Fitness Goal:  <input className='reg-input'
              type="text"
              placeholder="fitness_goal "
              value={fitness_goal}
              onChange={(e) => setFitness_goal(e.target.value)}
            /> */}
            {errors.fitness_goal && <span className="error">{errors.fitness_goal}</span>}<br></br>
            Diet Preference : <select className='reg-input' onChange={(e) => setDiet_preference(e.target.value)}>
              <option>select</option>
              <option>Veg</option>
              <option>Non-veg</option>
              <option>Vegan</option>
            </select>

           {/* Diet Preference: <input className='reg-input'
              type="text"
              placeholder="diet_preference"
              value={diet_preference}
              onChange={(e) => setDiet_preference(e.target.value)}
            /> */}
            {errors.diet_preference && <span className="error">{errors.diet_preference}</span>}<br></br>
             UserName: <input className='reg-input'
              type="text"
              placeholder="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
             Password: <input className='reg-input'
              type="password"
              placeholder="paasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             {/* role: <input className='reg-input'
              type="text"
              placeholder="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            /> */}
            
           
          </div>
          <button className="registration-button" type="submit">Signup</button>
        </form>
    </div>
    </div>
  );
};

export default Registration;