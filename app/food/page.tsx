import React from 'react'
import TitleFood from '../components/FoodComponent/TitleFood'
import { NewsFood1 } from '../components/FoodComponent/NewsFood1'
import { SomethingFresh2 } from '../components/sportscomponent/SomethingFresh2'
import NavbarMobile from '../components/NavbarMobile'
import NavbarPc from '../components/NavbarPc'
import { Footer } from '../components/Footer'
import TitleFood2 from '../components/FoodComponent/TitleFood2'
import NewsFood2 from '../components/FoodComponent/NewsFood2'
import SomethingFood from '../components/FoodComponent/SomethingFood'

const page = () => {
  return (
    <>
      <div className='  w-full flex flex-col bg-slate-100'>
        <NavbarMobile />
        <NavbarPc />
        <div className=" w-full flex justify-center f items-center p-1">
          <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start justify-center lg:flex-row gap-1">
            <div className=' w-full flex flex-col lg:flex-row'>
              <div className="w-full flex-col gap-5 lg:w-[65%] lg:p-2">
                <div className="w-full flex flex-col" id='news1'>
                  <TitleFood />
                  <NewsFood1 />
                </div>
                <div className='w-full flex flex-col mt-5'>
                  <TitleFood2 />
                  <NewsFood2 />
                </div>
              </div>
              <SomethingFood />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page