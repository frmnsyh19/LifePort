import React from "react";

import "../style.css";

export const NewsSport = () => {
  return (
    <>
      {/* news1 */}
      <div className=" w-full flex flex-col gap-2 p-0 lg:p-2">
        <div className=" w-full h-[25rem] lg:flex hidden">
          <img
            src="/image/sportnews1.jpg"
            className=" w-full h-full"
            alt=""
          />
        </div>
        <div className=" w-full h-[20rem] flex lg:hidden">
          <img
            src="/image/newssports2.png"
            className=" w-full h-full"
            alt=""
          />
        </div>
        <small className=" ml-1 lg:ml-0 text-sm text-gray-400 italic">
          bersepeda adalah olahraga kardio yang
          lebih bagus dari pada lari apakah benar?
        </small>
        <div className=" mt-3 flex justify-start flex-col gap-4 text-justify text-base leading-8 p-1">
          <span>{`Di tengah tren gaya hidup sehat, bersepeda semakin populer sebagai pilihan olahraga kardio, 
          terutama bagi kalangan muda yang berusaha menjaga kesehatan dan kebugaran.
          Dengan manfaat yang luas, mulai dari mengurangi stres hingga menjadi aktivitas yang bisa
          dinikmati secara santai, bersepeda memberikan alternatif yang menarik bagi para pemula di
          usia 18-25 tahun yang ingin mulai berolahraga. Namun, apakah bersepeda benar-benar lebih baik
          daripada lari?`}</span>

          <span>{`Riko Alfiansyah, seorang pengusaha rumah makan seafood, membagikan kisahnya tentang bagaimana 
          ia beralih dari lari ke bersepeda. "Saya suka makan, terutama setelah memulai bisnis rumah makan 
          seafood. Tanpa sadar, berat badan saya naik drastis hingga mencapai obesitas," ujarnya. 
          Ketika memutuskan untuk mulai berolahraga, Riko mencoba lari, tetapi rasa sakit di lutut yang 
          sering muncul membuatnya mencari alternatif lain.`}</span>

          <span>
            {`
            "Setelah melakukan riset kecil-kecilan, saya memilih bersepeda karena lebih rendah dampaknya pada 
            persendian. Bagi orang dengan berat badan berlebih seperti saya, risiko cedera saat bersepeda lebih 
            kecil," jelas Riko. Aktivitas ini tidak hanya memungkinkan olahraga dalam waktu yang lebih lama, 
            tetapi juga memberikan fleksibilitas yang lebih besar. "Kalau lagi lelah, saya bisa mengayuh sepeda 
            lebih pelan, dan kalau merasa bugar, saya bisa menambah kecepatan."
            `}
          </span>

          <span>{`Bersepeda tidak hanya memberikan kenyamanan, tetapi juga manfaat jangka panjang yang signifikan. Riko berbagi bahwa setelah rutin bersepeda, berat badannya berangsur turun tanpa rasa sakit di lutut,
           serta stamina dan kondisi pernapasannya meningkat. "Sekarang, saya jarang merasa
           sesak napas saat melakukan aktivitas sehari-hari," tambahnya`}</span>

          <span>{`Bagi para pemula yang masih ragu untuk mulai berolahraga, 
          Riko memberikan pesan sederhana, "Jangan takut untuk memulai, dan lakukan aktivitas yang menyenangkan agar lebih mudah dijalankan secara konsisten. 
          Dengarkan tubuh Anda dan pilih olahraga yang sesuai dengan kondisi fisik."`}</span>

          <span>{`Jadi, apakah bersepeda lebih baik dari lari? Jawabannya tergantung pada kebutuhan dan preferensi  individu. Namun, bagi mereka yang mencari alternatif dengan risiko cedera yang lebih rendah dan manfaat 
                  jangka panjang yang nyata, bersepeda bisa menjadi pilihan yang lebih tepat.`}</span>
          <span className=" font-bold">{`Kesimpulannya`}</span>

          <span>{`bersepeda adalah pilihan olahraga kardio yang ramah bagi persendian dan cocok 
                  untuk mereka yang ingin menghindari risiko cedera, terutama bagi individu dengan
                  berat badan berlebih atau masalah persendian. Meski lari tetap memiliki manfaatnya,
                  bersepeda menawarkan fleksibilitas dan kenyamanan yang lebih besar, sehingga bisa
                  menjadi alternatif yang baik untuk menjaga kebugaran. Pada akhirnya, pilihan antara
                  bersepeda atau lari sebaiknya disesuaikan dengan kebutuhan, preferensi, dan kondisi
                  fisik masing-masing individu.`}</span>
        </div>
      </div>
    </>
  );
};
