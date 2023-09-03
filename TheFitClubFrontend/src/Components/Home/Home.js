import React from 'react'
import Hero from '../Hero/Hero'
import Programs from '../Programs/Programs'
import Reasons from '../Reasons/Reasons'
import Plans from '../Plans/Plans'
import Testimonials from '../Testimonials/Testimonials'
import Bmr from '../Bmr/Bmr'
import Join from '../Join/Join'
// import Login from '../Login/Login'
import Exercise from '../Exercise/Exercise'
import Footer from '../Footer/Footer'
import "./Home.css"

import AddExercise from '../Exercise/AddExercise'
import Trainer from '../Profile/Trainer'
import UserProfile from '../Profile/UserProfile'
// import PageLayout from '../AdminDashboard/Admin'
import Add from '../Exercise/Add'
import Measurements from '../Measurements/Measurements'

function Home() {
  return (
    <div className='Home'>
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Bmr/>
        <Join/>
        {/* <Login/> */}
        {/* <Exercise/>
        <AddExercise/>
        <Nutrition/>
        <Trainer/>
        <UserProfile/>
        <Add/>
        <Measurements/> */}
        {/* <PageLayout/> */}
        <Footer/>
    </div>
  )
}

export default Home