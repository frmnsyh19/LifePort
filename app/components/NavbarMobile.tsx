import React from 'react'
import Dawer from './Dawer'
import Image from 'next/image'

const NavbarMobile = () => {
  return (
    <>
      <div className='z-50 navbar bg-indigo-900 lg:hidden p-3 w-full flex justify-between items-center'>
        <Dawer />
        <div className=' p-2'>
          <Image src='/image/logo.png' width={50} height={50} alt='' />
        </div>
      </div>
    </>
  )
}

export default NavbarMobile