"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Autoplay } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
import '../style.css'

import 'swiper/css';
const Swipers = () => {
  return (
    <>
      <div className=' w-full flex justify-center items-center p-1 lg:p-5'>
        <div className=" w-full lg:w-[90%] h-48 lg:h-[25rem]">
          <Swiper className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            loop={true}
            modules={[EffectCreative, Autoplay]}
          >
            <SwiperSlide id='content1' className='rounded-md w-full h-full'>
              <div className=' w-full h-full flex flex-col justify-end'>
                <div className=' w-full p-3 flex justify-start items-start'>
                  <p className=' text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi impedit facilis odio rerum molestiae, laboriosam magni quasi nisi incidunt repudiandae ipsam deleniti sapiente nulla ducimus esse laborum quisquam! Porro.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide id='content2' className='rounded-md w-full h-full'>Slide 2</SwiperSlide>
            <SwiperSlide id='content3' className='rounded-md w-full h-full'>Slide 3</SwiperSlide>
            <SwiperSlide id='content4' className='rounded-md w-full h-full'>Slide 4</SwiperSlide>
          </Swiper>
        </div>

      </div>
    </>
  )
}

export default Swipers