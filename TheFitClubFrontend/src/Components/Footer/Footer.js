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
                    <a href="https://www.instagram.com/" className='social-links'>
                        <img src={Instagram} alt='' />
                    </a>
                    <a href="https://www.linkedin.com/login" className='social-links' >
                        <img src={LinkedIn} alt='' />
                    </a>
                    <a href="https://www.facebook.com/" className='social-links'>
                        <img src={Facebook} alt='' />
                    </a>
                    <a href="https://twitter.com/i/flow/login" className='social-links'>
                        <img src={Twitter} alt='' />
                    </a>
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
