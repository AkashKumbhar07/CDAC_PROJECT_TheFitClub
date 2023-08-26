import React from 'react'
import "./Footer.css"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import Logo from "../../assets/logo.png"

function Footer() {
    return (
        <div className='Footer-container'>
            <hr></hr>
            
            <div className='footer' >
                <div className='social-links'>
                    <img src={Instagram} alt='' />
                    <img src={LinkedIn} alt='' />
                    <img src={Facebook} alt='' />
                    <img src={Twitter} alt='' />
                </div>

                <div className='logo-f'>
                    <img src={Logo} alt='' />
                </div>
            </div>
            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-2'></div>
        </div>
    )
}
export default Footer
