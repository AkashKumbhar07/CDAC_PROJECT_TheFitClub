import React from 'react'
import "./Programs.css"
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-router-dom'
function Programs() {
  return (
    <div className='Programs' id='Programs'>
        <div className='programs-header'>
            <span className='stroke-text'>Explore our </span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'><span><Link to={"getACoach"} style={{textDecoration:"none",color:"white"}}>Join now</Link></span> <img src={RightArrow} alt=''/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
