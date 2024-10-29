"use client"

import React from 'react'

import '../style.css'

import Link from 'next/link'


const Headline = () => {
  return (
    <>
      <div className="w-full flex justify-center  items-center p-1">
        <div className="w-full lg:w-[90%] flex lg:flex-row flex-col gap-1 justify-start p-1">
          <Link href={'/sport'} className=' cursor-pointer w-[95%] rounded-md lg:w-[70%] h-64 lg:h-[28rem]'>
            <img src="/image/newlifeport.jpg" className=' w-full h-full' alt="" />
          </Link>
          <div className=' w-full lg:w-[25%] lg:h-96  justify-center items-center gap-2 flex-row flex lg:flex-col p-1'>
            <div className=' w-full h-48'>
              <img src="/tubnail/1.png" className=' w-full h-full' alt="" />
            </div>
            <div className=' w-full h-48'>
              <img src="/tubnail/2.png" className=' w-full h-full' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headline