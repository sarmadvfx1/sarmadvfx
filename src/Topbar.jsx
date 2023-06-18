import React from 'react'
import './topbar.scss'
import { Outlet, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
    <div className='topbar'>
        <div className='list'>
            <Link to='/' className='list-element'>HOME</Link>
            <a className='list-element' href="/#Work">WORK</a>
            <Link to='/about' className='list-element'>ABOUT</Link>
            <a className='list-element' href="mailto:muhammadsarmad513@gmail.com">SAY HELLO</a>             
        </div>
        <div className='VFX'>
          <h1 className='heading'>SARMADVFX°</h1>
          <p className='text'>GRAPHICS DESIGNER BASED IN PK</p>
        </div>
    </div>
    <Outlet/>
    </>
  )
}
