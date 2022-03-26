import React from 'react'
import Img1 from '../../assets/myWork (1).jpg';
import Img2 from '../../assets/myWork (2).jpg';
import Img3 from '../../assets/3.jpg';
import Img4 from '../../assets/4.jpg';
import Img5 from '../../assets/5.jpg';
import Img6 from '../../assets/1.jpg';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='headerPortfolio'> &#x276C; Portfolio&#x27B6;&#x276D;</h2>

      <div className='container portfolio_container'>

      <article className='portfolio_item padding-6'>
          <div className='portfolio_item_image'>
            <img src={Img6} alt='' className='paddingd-6'/>
          </div>
          <h3>Platform Education (علمني)</h3>
          <a href='https://github.com/mohammedsaid21' className='btn' target='_blank'rel="noreferrer">Github</a>
          <a href='https://react-platform-educational.web.app/' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Img2} alt=''/>
          </div>
          <h3>This is a small e-commerce</h3>
          <a href='https://github.com/mohammedsaid21' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://zen-newton-b69e84.netlify.app/' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>
        
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Img3} alt=''/>
          </div>
          <h3>This is a site company for Internet</h3>
          <a href='https://github.com/mohammedsaid21/ElQemaCompany' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://mohammedsaid21.github.io/ElQemaCompany/' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Img4} alt=''/>
          </div>
          <h3>This is a Page with a lot of functionality</h3>
          <a href='https://github.com/mohammedsaid21/Website-Html-Css-and-JavaScript-' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://mohammedsaid21.github.io/Website-Html-Css-and-JavaScript-/' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Img5} alt=''/>
          </div>
          <h3>This is a party Website</h3>
          <a href='https://github.com/mohammedsaid21/Some-Creatvie-WebSite-a-party' className='btn' target='_blank'rel="noreferrer">Github</a>
          <a href='https://mohammedsaid21.github.io/Some-Creatvie-WebSite-a-party/' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Img1} alt=''/>
          </div>
          <h3>Soon</h3>
          <a href='https://github.com/mohammedsaid21' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://google.com' className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio