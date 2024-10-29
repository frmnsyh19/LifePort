import React from 'react'

const OurTeam = () => {
  return (
    <>
      <div className="w-full gap-9 mt-7 bg-slate-100 flex flex-col justify-center items-center p-2">
        <div className='w-full gap-2 flex text-center flex-col items-center justify-center'>
          <span className=' text-center text-indigo-900 font-bold text-4xl'>
            OUR TEAM
          </span>
          <span className=' text-gray-500'>Kelompok UAS TPPN (Teknik Peliputan dan Penulisan Naskah) A2</span>
        </div>
        <div className="w-full lg:w-[85%] gap-5 flex justify-center items-center flex-wrap p-3">
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/1.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/2.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/3.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/4.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/5.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/6.png" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-48 lg:w-72  h-44 lg:h-72'>
            <img src="/team/7.png" className=' w-full h-full' alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default OurTeam