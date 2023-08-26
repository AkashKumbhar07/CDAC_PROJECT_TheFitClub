import { Route,Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
// import Registration from './Components/Registration/Registration';
// import Exercise from './Components/Exercise/Exercise';
// import Add from './Components/Exercise/Add';
import Registration from './Components/Registration/Registration';
import TrainerRegistration from './Components/Registration/TrainerRegistration';
import TrainersList from './Components/Profile/Trainer';
import UserProfile from './Components/Profile/UserProfile';
import TrainerDashboard from './Components/Profile/TrainerDashboard';
import AdminDashboard from './Components/Profile/AdminDashboard';
// import TrainerRegistration from './Components/Registration/TrainerRegistration';
// import Registration from './Components/Registration/Registration';

function App() {
  return <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/trainerReg' element={<TrainerRegistration/>}></Route>
    <Route path='/Profile' element={<UserProfile/>}></Route>
    <Route path='/trDashboard' element={<TrainerDashboard/>}></Route>
    <Route path='/getACoach' element={<TrainersList/>}></Route>
    <Route path='/adminDash' element={<AdminDashboard/>}></Route>
    {/* <Route path='/exercise' element={<Exercise/>}/>
    <Route path='/AddExercise' element={<Add/>}/> */}
    </Routes>
}


export default App;
