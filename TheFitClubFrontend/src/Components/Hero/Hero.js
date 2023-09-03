import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
// import hero_image_back from "../../assets/hero_image_back.png"
// import Heart from "../../assets/heart.png"
// import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link, useNavigate } from 'react-router-dom'



const Hero = () => {
  const Navigate=useNavigate();
  const logoutHandler=()=>{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userid')
    Navigate('/login')
  }

  const transition ={type:'spring', duration:3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id='home'>
      <div className='blur hero-blur'></div>

      <div className="left-h">
        <Header />
       
        <div className="the-best-add">
          <motion.div 
          initial={{left : mobile? "165px" : "238px"}}
          whileInView={{left : '8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>Sweat Today, Shine Tomorrow</span>
        </div>

        {/* hero heading*/}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className='span'>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest.
            </span>
          </div>
        </div>

        {/* figures*/}

        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={50} start={25} delay='4' postFix="+"/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={100} start={80} delay='4' postFix="+"/>
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={15} start={5} delay='4' postFix="+"/>
            </span>
            <span>fitness Programs</span>
          </div>
        </div>

        {/* hero buttons*/ }
        <div className='hero-buttons'>
          {/* <button className='btn'>Get Started</button> */}  
          <Link to={"/getACoach"} style={{paddingTop:"5px",paddingBottom:"5px",  paddingLeft:"5px",textDecoration:"none",fontWeight:"bold",textAlign:"center"}}>Get Coach</Link>
          {/* <button className='btn'>Learn More</button> */}
        </div>
      </div>
      {/*right side*/}
      <div className="right-h">
        {/* <button className='btn'>Sign In</button> */}
        <Link className='login' to={"/login"}>Sign in</Link>
        <Link className='profile' to={"/profile"} >Profile</Link>  {/*   add button */}
        <button className='logout-btn' onClick={logoutHandler} >Logout</button>
        <img src={hero_image} alt='' className='hero-image'/>
      </div>
    </div>
  )
}

export default Hero
