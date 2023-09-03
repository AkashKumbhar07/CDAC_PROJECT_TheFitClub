import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Registration.css"
import Header2 from '../Header/Header2';

function TrainerRegistration() {

    const [Name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('trainer');
  const [errors, setErrors] = useState({});
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    // Validate fields based on userType
    if (!Name) newErrors.Name = 'Name is required.';
    if (!gender) newErrors.gender = 'gender is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!dob) newErrors.dob = 'Date of Birth is required.';
    if (!phone_no) newErrors.phone_no = 'phone_no is required.';
    if (!city) newErrors.city = 'city is required.';
    if (!country) newErrors.Country = 'Country is required.';
    if (!specialization) newErrors.specialization = 'specialization  is required.';
    if (!experience) newErrors.experience = 'experience is required.';
    if (!bio) newErrors.bio = 'bio is required.';
    if (!userName) newErrors.userName ='userName is required';
    if (!password) newErrors.password ='password is required';
    // if (!role) newErrors.userName ='role is required';

    if (Object.keys(newErrors).length === 0) {
      const data = {
        name: Name,
        gender: gender,
        email: email,
        dob: dob,
        phoneNo: phone_no,
        city: city,
        country: country,
        specialization: specialization,
        experience: experience,
        bio: bio,
        login:{
          userName: userName,
          password: password,
          role: role
        }
      };
      
      axios.post(`http://localhost:8080/trainer/addTrainer`,data)
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
          setSpecialization('');
          setExperience('');
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
    {/* <Link to={'/userReg'}>UserRegistration</Link> */}
  <div className="container-reg">
    <h2> Sign Up </h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
         Name: <input className='reg-input'
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.Name && <span className="error">{errors.Name}</span>}<br></br>
          Gender: <select  onChange={(e) => setGender(e.target.value)}>
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
          {errors.specialization && <span className="error">{errors.specialization}</span>}<br></br>
          Specialization:<select className='reg-input' onChange={(e) => setSpecialization(e.target.value)}>
              <option>select</option>
              <option>Strength </option>
              <option>Yoga</option>
              <option>Athlete</option>
              <option>Marathon</option>
            </select>
          
          
          {/* specialization: <input className='reg-input'
            type="text"
            placeholder="weight"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          /> */}
          {errors.experience && <span className="error">{errors.experience}</span>}<br></br>
          Experience:  <input className='reg-input'
            type="number"
            placeholder="fitness_goal "
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          {errors.bio && <span className="error">{errors.bio}</span>}<br></br>
          Bio: <input className='reg-input'
            type="text"
            placeholder="diet_preference"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
           UserName: <input className='reg-input'
            type="text"
            placeholder="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
           Pasword: <input className='reg-input'
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

      {/* {user && (
              <div>
                  <h3>User Details</h3>
                  <p>Name: {user.Name}</p>
                  <p>DOB: {user.dob}</p>
                  <p>Gender: {user.gender}</p>
              </div>
          )} */}
  </div>
  </div>
  )
}

export default TrainerRegistration
