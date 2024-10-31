import React from "react";

const AboutHeade = () => {
  return (
    <>
      <div className="w-full bg-slate-100 flex justify-center items-center lg:h-[37rem] p-3">
        <div className=" w-full lg:w-[85%] lg:flex-row flex-col-reverse gap-7 lg:gap-0   flex justify-around items-center p-1">
          <div className=" p-1 w-full lg:w-1/2  flex flex-col gap-3">
            <span className="  font-bold text-lg text-indigo-800">
              Filosofi Portal
            </span>
            <span className=" text-justify text-base text-gray-500">
              {`
              Lifeport adalah jembatan antara tren modern dan 
              gaya hidup sehat yang seimbang. Nama Lifeport menggambarkan sebuah "port" 
              atau pelabuhan yang menjadi tempat bagi generasi muda untuk berlabuh, memulai, 
              dan mengakses semua yang diperlukan untuk mencapai versi terbaik dari hidup mereka. 
              Menghadirkan keseimbangan antara aspek fisik, mental, dan sosial, Lifeport berfungsi sebagai panduan, menghubungkan informasi relevan yang membantu pengunjung untuk tetap tangguh, berdaya, dan berkembang dalam dunia yang terus berubah.
              `}
            </span>
            <span className=" text-justify text-wrap text-base text-gray-500">
              Dengan warna biru yang mencerminkan
              ketenangan dan stabilitas, serta
              hijau yang melambangkan kesehatan
              dan kebaruan, Lifeport membawa
              energi positif, inspirasi, dan
              langkah nyata dalam setiap artikel,
              tips, dan panduan. Ini bukan sekadar
              media ini adalah titik kumpul untuk
              menghidupkan visi hidup yang aktif,
              sehat, dan seimbang bagi setiap
              pengunjungnya.
            </span>
            <span className=" text-justify text-wrap text-base text-gray-500">
              <span className=" text-lg  font-bold text-indigo-800">
                Tema Rubrik Berita,
              </span>{" "}
              <br />
              Healthy, Technology, Sport, Food &
              Fashion
            </span>
          </div>
          <div className=" p-1 w-full flex justify-center items-center lg:w-1/3">
            <img
              src="/image/newlogo.png"
              className=" w-60 lg:w-full lg:h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeade;
