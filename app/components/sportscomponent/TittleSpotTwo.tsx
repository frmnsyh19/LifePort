import React from 'react'
import { FiCalendar, FiUser } from 'react-icons/fi'
const TittleSpotTwo = () => {
  return (
    <>
      <div className=' w-full  flex justify-center items-center p-2'>
        <div className=" w-[35rem] flex-col gap-5 flex justify-center p-2 items-center ">
          <div className=' w-16 p-1 flex-col gap-2 rounded-md bg-slate-200 flex justify-center items-center'>
            <p className=' text-base text-gray-400'>Sport</p>
          </div>
          <span className=' text-2xl capitalizes font-bold text-center text-slate-400'>
            Jogging Malam, Tren Sehat Baru di Kalangan Pekerja Muda
          </span>
          <div className=' flex flex-col justify-center items-center lg:flex-row w-full border boder-red-500'>
            <div className=' p-2 flex flex-row items-center gap-1'>
              <FiUser className=' text-sm lg:text-base text-gray-400' />
              <p className=' text-sm lg:text-base text-gray-400'>Ade Bayu Pamungkas - 2371510054,</p>
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

export default TittleSpotTwo