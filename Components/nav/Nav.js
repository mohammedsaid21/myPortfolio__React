import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import './nav.css'

const Nav = () => {
  const [activeNav , setactiveNav ] = useState('#'); 

  return (
    <nav>
      <a href='#header' onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'activeNav' : ''}>
        <AiOutlineHome /></a>
      <a href='#about' onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'activeNav' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'activeNav' : ''}><BiBook /></a>
      <a href='#service' onClick={() => setactiveNav('#service')} className={activeNav === '#service' ? 'activeNav' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'activeNav' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav