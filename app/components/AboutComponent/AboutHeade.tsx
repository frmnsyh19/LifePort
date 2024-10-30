import React from "react";

const AboutHeade = () => {
  return (
    <>
      <div className="w-full bg-slate-100 flex justify-center items-center lg:h-[37rem] p-3">
        <div className=" w-full lg:w-[85%] lg:flex-row flex-col-reverse gap-7 lg:gap-0   flex justify-around items-center p-1">
          <div className=" p-1 w-full  lg:w-1/2  flex flex-col gap-3">
            <span className=" text-justify text-base text-gray-500">
              Logo “LifePort” ini dirancang untuk
              portal berita lifestyle dengan tema
              Healthy, Technology, Sport, Food,
              dan Fashion. Elemen-elemen kunci
              dalam logo:
            </span>
            <span className=" text-justify text-wrap text-base text-gray-500">
              Font Modern dan Futuristik:
              Menyiratkan inovasi dan kemajuan,
              cocok untuk tema teknologi dan
              modernitas. Warna Hijau dan Biru:
              Hijau melambangkan kesehatan dan
              keseimbangan, sementara biru
              menekankan stabilitas dan
              profesionalisme. Garis Sirkuit
              Digital: Mewakili teknologi dan
              keterhubungan antar tema berita.
            </span>
            <span className=" text-justify text-wrap text-base text-gray-500">
              Simbol Daun/Gelombang: Sentuhan
              alami untuk topik Healthy dan
              keseimbangan. Desain Sederhana:
              Memberikan kesan rapi dan elegan,
              mendukung berbagai tema tanpa
              terlihat berlebihan. Keseluruhan
              logo menyampaikan integrasi antara
              kehidupan modern dan elemen alami,
              sesuai untuk portal berita yang
              menyajikan informasi seputar gaya
              hidup seimbang.
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
