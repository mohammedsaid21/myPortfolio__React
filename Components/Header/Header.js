import React, { useState } from 'react'
import CTA from './CTA'
import ME from '../../assets/pngegg.png'
import Social_Media from './Social_Media'
import './header.css'
const Header = () => {

  return (
    <header id='header'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h2>Mohamed Said</h2>
        <h5 className='text-light'>Frontend Developer</h5>

        <CTA />
        <Social_Media />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header