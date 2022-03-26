import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import Html from '../../assets/images/html.svg'
import Css from '../../assets/images/css.svg'
import Js from '../../assets/images/js.svg'
import react from '../../assets/images/react.svg'
import Sass from '../../assets/images/sass.png'
import Tailwind from '../../assets/images/tailwind.svg'
import reduxi from '../../assets/images/redux.svg'
import './style.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        <div className="skill">
            <img src={Html} alt="HTML" className="" />
            <h3 className="">HTML</h3>
        </div>

        <div className="skill">
            <img src={Css} alt="CSS" className="" />
            <h3 className="">CSS</h3>
        </div>

        <div className="skill">
            <img src={Js} alt="Js" className="" />
            <h3 className="">Js</h3>
        </div>

        <div className="skill">
            <img src={react} alt="react" className="" />
            <h3 className="">react</h3>
        </div>

        <div className="skill">
            <img src={reduxi} alt="reduxi" className="" />
            <h3 className="">redux</h3>
        </div>

        <div className="skill">
            <img src={Sass} alt="SASS" className="" />
            <h3 className="">SASS</h3>
        </div>

        <div className="skill">
            <img src={Tailwind} alt="Tailwind" className="" />
            <h3 className="">Tailwind</h3>
        </div>


      </div>

      {/* <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>TailWind css</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_softskill'>
        <h3>Soft Skills</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Problem-solving</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Communication</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Managing Time</h4>
              </div>
            </article>
          </div>
        </div>

      </div> */}

    </section>
  )
}

export default Experience