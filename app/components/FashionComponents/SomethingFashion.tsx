import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { CategoriNews } from '../CategoriNews'


const SomethingFashion = () => {
  return (
    <>
      <div className=" w-full lg:w-[35%] p-2 flex flex-col justify-start gap-2">
        {/* something fresh */}
        <div className=' flex w-full p-3 flex-col justify-start'>
          {/* title */}
          <div className='p-2 w-full border-gray-400 border-b '>
            <span className=' text-slate-500 text-xl font-semibold capitalize'>
              Something Fresh
            </span>
          </div>
          <div className=' w-full flex flex-col justify-start items-center'>
            <div className="w-full flex flex-row justify-start items-center gap-2 p-2">
              <div className=' w-48 h-20 border border-yellow-400'>
                <img src="/fashion/kukufashion.jpg" className='w-full h-full' alt="" />
              </div>
              <div className=' w-full flex flex-col p-1 gap-1 justify-start'>
                <span className=' text-base text-indigo-800'>
                  Kenapa Saat Ini Nail Art Menjadi Salah Satu Fashion Yang Menjadi Hal
                  Wajib Untuk Wanita?
                </span>
                <div className=' flex w-full flex-row justify-start items-center gap-1 '>
                  <FiCalendar className=' text-base text-gray-400' />
                  <span className=' text-base text-gray-400'>26 Oktober 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* categoris */}
        <CategoriNews />
      </div>
    </>
  )
}

export default SomethingFashion