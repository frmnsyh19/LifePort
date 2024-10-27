"use client"
import '../style.css'
import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import Button from '@mui/material/Button'
import { useEffect } from 'react'
import aos from 'aos'
import "aos/dist/aos.css";
import Link from 'next/link'
export const NewsUpdate = () => {
  useEffect(() => {
    aos.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div data-aos="fade-down" className="w-full border border-yellow-400 lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] border h-48 lg:h-72 border-red-700' id='newshealthy'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Posisi Duduk yang Tepat untuk Mencegah Gangguan Otot,Tulang dan Mata Saat Bekerja"'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Bagi banyak pekerja kantoran, duduk di depan komputer selama berjam-jam sudah
            menjadi rutinitas sehari-hari.
          </span>
          <div className=' w-40'>
            <Link href='/healthy'>
              <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
                Read More...
              </Button></Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full border border-yellow-400 lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] border h-48 lg:h-72 border-red-700' id='news2'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, provident."'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates?
          </span>
          <div className=' w-40'>
            <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
              Read More...
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full border border-yellow-400 lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] border h-48 lg:h-72 border-red-700' id='news3'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, provident."'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates?
          </span>
          <div className=' w-40'>
            <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
              Read More...
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full border border-yellow-400 lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] border h-48 lg:h-72 border-red-700' id='news4'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, provident."'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates?
          </span>
          <div className=' w-40'>
            <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
              Read More...
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full border border-yellow-400 lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] border h-48 lg:h-72 border-red-700' id='news5'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, provident."'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates?
          </span>
          <div className=' w-40'>
            <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
              Read More...
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
