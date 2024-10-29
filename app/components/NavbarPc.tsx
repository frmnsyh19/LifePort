"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const NavbarPc = () => {
  return (
    <>
      <div className=' w-full hidden justify-center items-center bg-indigo-900 border shadow-lg flex-col lg:flex'>
        <div className=' cursor-pointer w-[90%] p-3 flex justify-center items-center '>
          <Image src='/image/logo.png' className='mt-2' width={130} height={130} alt='' />
        </div>
        <div className=' navbar p-3 flex justify-center items-center'>
          <div className="w-[90%] flex justify-between items-center">
            <Link href='/'>
              <div className="p-3 cursor-pointer justify-start flex" >
                <span className="text-3xl font-bold text-green-600">Life</span>
                <span className=" text-3xl font-bold text-blue-600">Port</span>
              </div>
            </Link>
            <ul className=" p-2  flex-row justify-around gap-2 lg:flex hidden">
              <li className=" p-3"><Link className=' text-white hover:text-blue-500 font-bold' href="/about">About Us</Link></li>
              <p className=' text-base  mt-3'>|</p>
              <li className=" p-3"><Link className=' text-white font-bold hover:text-green-500' href="/healthy">Healhty</Link></li>
              <li className=" p-3"><Link className=' text-white font-bold hover:text-green-500' href="/food">Food</Link></li>
              <li className=" p-3"><Link className=' text-white font-bold hover:text-green-500' href="/sport">Sport</Link></li>
              <li className=" p-3"><Link className=' text-white font-bold hover:text-green-500' href="/fashion">Fashion</Link></li>
              <li className=" p-3"><Link className=' text-white font-bold hover:text-green-500' href="/technology">Technology</Link></li>
            </ul>
            <div className=' flex justify-center items-center p-2 gap-3'>
              <FiInstagram className='text-lg text-white hover:text-blue-500' />
              <FiFacebook className='text-lg text-white hover:text-blue-500' />
              <FiTwitter className='text-lg text-white hover:text-blue-500' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarPc

