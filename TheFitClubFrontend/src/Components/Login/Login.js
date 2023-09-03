import React,{useState} from 'react';
import './Login.css'; 
import loginimage from "../../assets/login.jpg"
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import Header2 from '../Header/Header2'


function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const Navigate=useNavigate();
   
   

  const handleLogin = () => {
  axios.get(`http://localhost:8080/login/${userName}/${password}`)
    .then(response => {
      setUser(response.data);
      if (response.data.role === 'user') {
        alert('Login Successfully');
        
        sessionStorage.setItem('user', JSON.stringify(response.data.login_id));
        Navigate('/');
      } else if (response.data.role === 'admin') {
        alert('Login Successfully');
        sessionStorage.setItem('admin', JSON.stringify(response.data.login_id));
        Navigate('/adminDash');
      } else if (response.data.role === 'trainer') {
        alert('Login Successfully');
        sessionStorage.setItem('trainer', JSON.stringify(response.data.login_id));
        Navigate('/trDashboard');
      } else {
        alert('Invalid Credentials');
      }
      setError(null);
    })
    .catch(error => {
      setError('User not found.');
      setUser(null);
      alert('User not found.')
    });
};

  return (
    <div>
      <Header2/>
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Sign in</h2>
        <div className="form-group">
          {/* <label className='login-lb' htmlFor="email">Email</label> */}
          <b>UserName: </b><input type="email" id="email" className="form-control" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="form-group">
          {/* <label className='login-lb' htmlFor="password">Password</label> */}
         <b> Password: </b><input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
        </div>        
        <button className="btn btn-primary btn-block" onClick={handleLogin}>Log In</button>
        <Link to="/register" className="text-center">Create new account</Link>
      </div>
      <div className="login-image">
        <img src={loginimage} alt="Login" className="rounded" />
      </div>
      {/* {error && <p>{error}</p>} */}
    </div>
    
    </div>
    
  );
}

export default Login;