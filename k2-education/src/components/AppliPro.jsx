import React from 'react';
import './appliPro.css';
import {Pagination, Navigation, Mousewheel, Keyboard} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    step: 'Step 1',
    title: 'Book a Free Consultation',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
  },
  {
    step: 'Step 2',
    title: 'Fill & Submit Your Application',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
  }
];

const AppliPro = () => {
  return (
    <section className='appli_pro'>
        <h1>Apllication Process</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br></br>
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
        </p>

        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
        // modules={[Pagination, Navigation, Scrollbar, A11y]}
        // spaceBetween={40}
        // slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
          {
            data.map(({step, title, text}, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='appli_step'>
                   {step}
                  </div>
                  <h2>{title}</h2>
                  <p className='appli_text'>{text}</p>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default AppliPro