import './about.scss'
import { Outlet } from "react-router-dom";

import React from 'react'

export default function About() {
    return (
        <>
        <div className='about'>
            <div className="wrapper">
            <div className="me">
                <h3 id="heading">About me. About SarmadVFX</h3>
                <div className="seperator"></div>
                <h6 id="desc">
                    SARMADVFX  is the portfolio of Sarmad Ameer, a multidisciplinary graphics designer based in Punjab, Lahore<br/><br/>
                    Primarily focused on design, animation and typography, with respect for profound story telling.<br/><br/>
                    Nearing a decade of professional experience
                </h6>
            </div>
            <div className="contact">
                <h3 id="heading">Contact Info</h3>
                <div className="seperator"></div>
                <h6 id="desc">
                    Email:<br/>
                    <a id='desc' href="mailto:muhammadsarmad513@gmail.com">sarmadvfx</a><br/><br/>
                    Linkedin:<br/>
                    <a id='desc' href="https://www.linkedin.com/in/muhammad-sarmad-64503227b/">sarmadameer</a>
                    
                </h6>
            </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
