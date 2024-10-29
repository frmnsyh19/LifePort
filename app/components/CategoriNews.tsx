import React from 'react'


export const CategoriNews = () => {
  return (
    <>
      <div className="w-full gap-2 flex flex-col p-2">
        <div className=' w-full p-3 border-b border-slate-400'>
          <span className=' text-slate-500 text-lg'>Categories</span>
        </div>
        <div className=' w-full p-2 flex flex-col gap-1'>
          <div className=' w-full h-12 items-center bg-slate-200 hover:bg-slate-300 justify-between flex p-2'>
            <span className=' text-base text-neutral'>Heathly</span>
            <span className=' mr-1 text-end'>
              1
            </span>
          </div>
          <div className=' w-full h-12 items-center bg-slate-200 gap-1 hover:bg-slate-300 justify-between flex p-2'>
            <span className=' text-base text-neutral'>Sport</span>
            <span className=' mr-1 text-end'>
              2
            </span>
          </div>
          <div className=' w-full h-12 items-center bg-slate-200 hover:bg-slate-300 justify-between flex p-2'>
            <span className=' text-base text-neutral'>Food</span>
            <span className=' mr-1 text-end'>
              2
            </span>
          </div>
          <div className=' w-full h-12 items-center bg-slate-200 hover:bg-slate-300 justify-between flex p-2'>
            <span className=' text-base text-neutral'>Fashion</span>
            <span className=' mr-1 text-end'>
              1
            </span>
          </div>
          <div className=' w-full h-12 items-center bg-slate-200 hover:bg-slate-300 justify-between flex p-2'>
            <span className=' text-base text-neutral'>Heathly</span>
            <span className=' mr-1 text-end'>
              1
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
