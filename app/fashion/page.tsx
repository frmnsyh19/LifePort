import React from 'react'
import { Rows1 } from '../components/FashionComponents/Rows1'
import NavbarPc from '../components/NavbarPc'
import NavbarMobile from '../components/NavbarMobile'
import SomethingFashion from '../components/FashionComponents/SomethingFashion'
import { TitleFashion } from '../components/FashionComponents/TitleFashion'
import { Footer } from '../components/Footer'

const page = () => {
  return (
    <>
      <div className=' w-full flex flex-col bg-slate-50 text-neutral'>
        <NavbarMobile />
        <NavbarPc />
        <TitleFashion />
        <div className=" w-full flex justify-center items-center p-1">
          <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start justify-center lg:flex-row gap-1">
            <Rows1 />
            {/* something fresh */}
            <SomethingFashion />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default page