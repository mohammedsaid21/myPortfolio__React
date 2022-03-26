import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaRegTimesCircle } from 'react-icons/fa'

import './style.css'

const Services = () => {
  const [fixed, setfixed] = useState('services-card');
  const [fixed2, setfixed2] = useState('services-card');
  const [fixed3, setfixed3] = useState('services-card');
  const handleShowService = (e) => {    setfixed('services-cards-fixed')    }

  const removeFixed = () => {   setfixed('none-div')    }

  // {fixed === 'services-card' ? 'services-card' :'none-div'}


  useEffect(() => {

      console.log('1')

  }, [fixed]);

  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        {/* Start Content Creative */}
          <div className="services-cards">
            <div className='services-card'>
              <h3>UI/UX <br /> Designer</h3>
              <span onClick={handleShowService}>See more <BsArrowRightShort className='services-icon'/></span>
              <div className={fixed === 'services-card' ? 'none-div' : fixed } >
                <div className="fixed-bulr"></div>
                <FaRegTimesCircle className='esc' onClick={removeFixed} />
                <div className='header-service-menu'>
                  <h2>UI/UX Designer</h2>
                  <p>Service with more then 2 years of experience. Providing quality work to client and companies.</p>
                </div>
                <ul>
                  <li><BiCheck/>I develop the user Interface</li>
                  <li><BiCheck/>Web page development</li>
                  <li><BiCheck/>Design and mockups of products for componies</li>
                  <li><BiCheck/>I create ux element interactions</li>
                </ul>
              </div>
          </div>
        {/* End Card a */}
            <div className='services-card'>
              <h3>Development WebSites</h3>
              <span onClick={handleShowService}>See more <BsArrowRightShort className='services-icon'/></span>
              <div className={fixed2 === 'services-card' ? 'none-div' : fixed2 } >
                <div className="fixed-bulr"></div>
                <FaRegTimesCircle className='esc' onClick={removeFixed} />
                <div className='header-service-menu'>
                  <h2>Development WebSites</h2>
                  <p>Service with more then 2 years of experience. Providing quality work to client and companies.</p>
                </div>
                <ul>
                  <li><BiCheck/>I develop the user Interface</li>
                  <li><BiCheck/>Web page development</li>
                  <li><BiCheck/>Design and mockups of products for componies</li>
                  <li><BiCheck/>I create ux element interactions</li>
                </ul>
              </div>
            </div>
        {/* End Card a */}
            <div className='services-card'>
              <h3>Content Creative </h3>
              <span onClick={handleShowService}>See more <BsArrowRightShort className='services-icon'/></span>
              <div className={fixed3 === 'services-card' ? 'none-div' : fixed3 } >
                <div className="fixed-bulr"></div>
                <FaRegTimesCircle className='esc' onClick={removeFixed} />
                <div className='header-service-menu'>
                  <h2>Content Creative</h2>
                  <p>Service with more then 2 years of experience. Providing quality work to client and companies.</p>
                </div>
                <ul>
                  <li><BiCheck/>I develop the user Interface</li>
                  <li><BiCheck/>Web page development</li>
                  <li><BiCheck/>Design and mockups of products for componies</li>
                  <li><BiCheck/>I create ux element interactions</li>
                </ul>
              </div>
            </div>
        {/* End Card a */}


          </div>
      </div>
    </section>
  )
}

export default Services