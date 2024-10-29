import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { CategoriNews } from '../CategoriNews'

const SomethingTeknologi = () => {
  return (
    <>
      <div className=" w-full lg:w-[35%]  p-2 flex flex-col justify-start gap-2">
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
              <div className=' w-48 h-20 '>
                <img src="/image/headlinenews5.png" className='w-full h-full' alt="" />
              </div>
              <div className=' w-full flex flex-col p-1 gap-1 justify-start'>
                <span className=' text-base text-indigo-800'>
                  Smartwatch: Sahabat Digital Gen Z untuk Monitoring Kesehatan Sehari-hari
                </span>
                <div className=' flex w-full flex-row justify-start items-center gap-1 '>
                  <FiCalendar className=' text-base text-gray-400' />
                  <span className=' text-base text-gray-400'>20 Oktober 2024</span>
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

export default SomethingTeknologi