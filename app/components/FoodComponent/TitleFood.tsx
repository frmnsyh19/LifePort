import React from 'react'
import { FiCalendar, FiUser } from 'react-icons/fi'
const TitleFood = () => {
  return (
    <>
      <div className=' w-full flex justify-center items-center p-2'>
        <div className=" w-[35rem] flex-col gap-5 flex justify-center p-2 items-center ">
          <div className=' w-16 p-1 flex-col gap-2 rounded-md bg-slate-200 flex justify-center items-center'>
            <p className=' text-base text-gray-400'>Food</p>
          </div>
          <span className=' text-2xl capitalize font-bold text-center text-slate-400'>
            Nasi beku bagus untuk pola makan dan konsumsi masyarakat
          </span>
          <div className=' flex w-full flex-col items-center justify-center lg:flex-row'>
            <div className=' p-2 flex flex-row items-center gap-1'>
              <FiUser className=' text-sm lg:text-base text-gray-400' />
              <p className=' text-sm lg:text-base  text-gray-400'>Vemas Bagas satria - 2371511045,</p>
            </div>
            <div className=' p-2 flex flex-row items-center gap-1'>
              <FiCalendar className=' text-sm lg:text-base text-gray-400' />
              <p className=' text-sm lg:text-base text-gray-400'>26 October 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleFood