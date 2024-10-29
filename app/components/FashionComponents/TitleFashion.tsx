import React from 'react'
import { FiCalendar, FiUser } from 'react-icons/fi'
export const TitleFashion = () => {
  return (
    <>
      <div className=' w-full flex justify-center items-center'>
        <div className="w-[90%]  flex=col flex justify-center items-center p-3">
          <div className=" w-[35rem] flex-col gap-5 flex justify-center p-2 items-center ">
            <div className=' w-16 p-1 flex-col gap-2 rounded-md bg-slate-200 flex justify-center items-center'>
              <p className=' text-base text-gray-400'>Fashion</p>
            </div>
            <span className=' text-2xl capitalizes font-bold text-center text-slate-400'>
              Kenapa Saat Ini Nail Art Menjadi Salah Satu Fashion Yang Menjadi Hal
              Wajib Untuk Wanita?
            </span>
            <div className=' flex flex-col items-center lg:flex-row'>
              <div className=' p-2 flex flex-row gap-1'>
                <FiUser className=' text-xl text-gray-400' />
                <p className=' text-gray-400'>Ladifa Safonia Ratri - 2171510734,</p>
              </div>
              <div className=' p-2 flex flex-row gap-1'>
                <FiCalendar className=' text-xl text-gray-400' />
                <p className=' text-gray-400'>26 October 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
