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
      <div data-aos="fade-down" className="w-full  lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] h-72' id='newshealthy'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Posisi Duduk yang Tepat untuk Mencegah Gangguan Otot,Tulang dan Mata Saat Bekerja"'}
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
      <div data-aos="fade-down" className="w-full  lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem]  h-72' id='news2'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'" Nasi beku bagus untuk pola makan dan konsumsi masyarakat."'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Dalam rutinitas yang padat, nasi
            beku jadi cara cepat untuk menyajikan makanan tanpa proses memasak yang
            panjang. Hal ini sangat relevan di zaman sekarang
          </span>
          <div className=' w-40'>
            <Link href='/food'>
              <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
                Read More...
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full  lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] h-72' id='news3'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Kenapa Saat Ini Nail Art Menjadi Salah Satu Fashion Yang Menjadi Hal Wajib Untuk Wanita?"'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Nail art identik dengan perempuan yang ingin mempercantik tampilan kuku mereka. Seni tersebut semakin banyak digandrungi remaja saat ini.
          </span>
          <div className=' w-40'>
            <Link href='/fashion'>
              <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
                Read More...
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] h-72' id='news4'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Jogging Malam, Tren Sehat Baru di Kalangan Pekerja Muda"'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Manfaat Kesehatan dari Jogging Malam, Bagi Tri dan banyak orang lainnya, jogging malam membawa manfaat kesehatan yang tak kalah penting dari olahraga pagi.
          </span>
          <div className=' w-40'>
            <Link href='/sport'>
              <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
                Read More...
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="w-full  lg:w-[95%] gap-2 flex-col justify-start items-center flex  lg:flex-row">
        <div className=' w-full lg:w-[40rem] h-72' id='news5'></div>
        <div className=' w-full justify-between gap-5 flex flex-col p-2'>
          <span className=' text-xl text-slate-400 font-bold'>
            {'"Smartwatch: Sahabat Digital Gen Z untuk Monitoring Kesehatan Sehari-hari"'}
          </span>
          <div className=' w-full gap-1 flex flex-row items-center'>
            <FiCalendar className=' text-base' />
            <span className=' text-base'>
              26 October 2024
            </span>
          </div>
          <span className=' text-slate-400 text-base'>
            Bagi banyak Gen Z, teknologi sudah menjadi bagian tak terpisahkan dari kehidupan
            sehari-hari. Salah satu perangkat yang semakin populer di kalangan mereka adalah
            smartwatch. Lebih dari sekadar aksesori gaya, smartwatch kini menjadi alat penting
            untuk memantau kesehatan dan kebugaran, terutama bagi mereka yang menjalani rutinitas kerja padat.
          </span>
          <div className=' w-40'>
            <Link href='/technology'>
              <Button variant="contained" size='large' className=' bg-indigo-700 text-white hover:bg-indigo-900'>
                Read More...
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
