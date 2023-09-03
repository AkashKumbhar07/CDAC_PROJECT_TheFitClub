import React from 'react'
import './Reasons.css'

import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"

import tick from "../../assets/tick.png"

function Reasons() {
    return (
        <div className='Reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} alt=''></img>
                <img src={image2} alt=''></img>
                <img src={image3} alt=''></img>
                <img src={image4} alt=''></img>
            </div>
            <div className='right-r'>
                <span>Some reasons</span>

                <div>
                    <span className='stroke-text'>why </span><span>choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt=''></img>
                        <span>OVER 50+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} alt=''></img>
                        <span>TRAIN SMARTER AND FATER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt=''></img>
                        <span>ONE FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt=''></img>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons
