import React from 'react'
import NavbarMobile from '../components/NavbarMobile'
import NavbarPc from '../components/NavbarPc'
import { Title } from '../components/sportComponent/Title'

import SomethingFresh from '../components/sportComponent/SomethingFresh'
import '../style.css'
import NewsComponent from '../components/sportComponent/NewsComponent'
const page = () => {
  return (
    <>
      <div className='  w-full flex flex-col bg-slate-100'>
        <NavbarMobile />
        <NavbarPc />
        <Title />
        <div className=" w-full flex justify-center items-center p-1">
          <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start justify-center lg:flex-row gap-1">
            <NewsComponent />
            {/* something fresh */}
            <SomethingFresh />
          </div>
        </div>
      </div>

    </>
  )
}

export default page