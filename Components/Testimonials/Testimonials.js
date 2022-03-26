import React from 'react'
import Img1 from '../../assets/person.jpg'
import './style.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={ { clickable: true } } >
        
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={Img1} alt='Avatar One' />
          </div>
          <h5 className='client_name'>Osama ElZero</h5>
          <small className='client_review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum eveniet quos quas reprehenderit delagnam iure rem, autem aperiam ipsam, est cumque voluptatem? Quia iusto voluptatum ?
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={Img1} alt='Avatar One' />
          </div>
          <h5 className='client_name'>Osama ElZero</h5>
          <small className='client_review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum eveniet quos quas reprehenderit delagnam iure rem, autem aperiam ipsam, est cumque voluptatem? Quia iusto voluptatum ?
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={Img1} alt='Avatar One' />
          </div>
          <h5 className='client_name'>Osama ElZero</h5>
          <small className='client_review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum eveniet quos quas reprehenderit delagnam iure rem, autem aperiam ipsam, est cumque voluptatem? Quia iusto voluptatum ?
          </small>
        </SwiperSlide>

      </Swiper>
      
    </section>
  )
}

export default Testimonials