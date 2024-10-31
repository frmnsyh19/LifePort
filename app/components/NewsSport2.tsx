import React from "react";

const NewsSport2 = () => {
  return (
    <>
      <div className=" w-full flex flex-col p-0 lg:p-2">
        <div className=" w-full h-[25rem] lg:flex hidden">
          <img
            src="/image/newssport1.jpg"
            className=" w-full h-full"
            alt=""
          />
        </div>
        <div className=" w-full h-72 flex lg:hidden">
          <img
            src="/image/headlinenews4.jpg"
            className=" w-full h-full"
            alt=""
          />
        </div>
        <small className=" ml-1 lg:ml-0 text-sm text-gray-400 italic">
          Jogging Malam, Tren Sehat Baru di
          Kalangan Pekerja Mud
        </small>
        <div className=" mt-2 flex lg:p-0 p-2 justify-start flex-col gap-4 text-justify text-base leading-8">
          <span>{` Jogging biasanya identik dengan aktivitas pagi hari, tetapi tren baru menunjukkan semakin
                  banyaknya orang yang memilih waktu malam untuk berolahraga. Bagi para pekerja kantoran,
                  jogging malam menjadi solusi untuk tetap bugar tanpa mengorbankan waktu kerja. Selain
                  memberikan manfaat fisik, aktivitas ini juga dianggap menenangkan setelah hari
                  yang padat.`}</span>
          <span>{`Salah satu penggiat jogging malam, Tri Khairunisa (24), seorang pekerja yang tinggal di Jakarta
                  Barat, rutin melakukan jogging setelah pulang kerja. "Karena kesibukan kerja dan kuliah, hanya
                  malam hari yang memungkinkan saya untuk jogging. Meskipun tidak selalu bisa, saya selalu
                  menyempatkan jika ada waktu," ujar Tri.`}</span>
          <span>{`Manfaat Kesehatan dari Jogging Malam, Bagi Tri dan banyak orang lainnya, jogging malam 
                membawa manfaat kesehatan yang tak kalah penting dari olahraga pagi. Selain membuat 
                tubuh lebih rileks, aktivitas ini meningkatkan kualitas tidur, mengurangi stres, dan membantu pembakaran kalori. "Setelah seharian bekerja di 
                depan komputer, tubuh terasa lebih segar dan pikiran jadi lebih tenang setelah jogging," tambah Tri.`}</span>
          <span>{`Keamanan, Hal Penting yang Harus Dijaga Meski menyenangkan, jogging di malam hari 
          memiliki tantangan tersendiri, terutama dari segi keamanan. Tri menekankan pentingnya tindakan pencegahan untuk menghindari risiko. Ia sendiri menggunakan pakaian reflektif dan menghindari musik dengan volume terlalu keras agar tetap waspada. "Saya juga selalu memilih rute yang terang dan aman, serta membawa tanda 
          pengenal dan perlengkapan bela diri jika diperlukan," jelasnya`}</span>
          <span>{`Jogging Malam sebagai Sarana Sosialisasi, Selain manfaat kesehatan, jogging malam juga 
          bisa menjadi ajang untuk bersosialisasi. Meski Tri lebih sering berlari sendiri, banyak komunitas yang terbentuk di Jakarta bagi para penggiat jogging malam. Komunitas-komunitas ini biasanya menetapkan jadwal yang fleksibel, namun bagi Tri yang
          sibuk, jogging sendiri tetap menjadi pilihan.`}</span>
          <span>{`Ayo Mulai Hidup Sehat dengan Jogging Malam!, Jogging malam kini bukan sekadar tren, melainkan solusi bagi banyak orang untuk tetap bugar dan rileks meski sibuk beraktivitas. Bagi Anda yang tertarik mencoba, mulailah dengan memilih rute yang aman dan selalu perhatikan keselamatan. Jogging malam dapat menjadi pilihan tepat untuk
                menjaga kesehatan di tengah jadwal yang padat`}</span>
        </div>
      </div>
    </>
  );
};

export default NewsSport2;
