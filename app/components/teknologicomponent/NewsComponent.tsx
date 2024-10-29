import React from 'react'

const NewsComponent = () => {
  return (
    <>
      <div className=" w-full lg:w-[65%] p-2">
        <div className=' w-full flex flex-col gap-2 p-0 lg:p-2'>
          <div className=' w-full h-96 lg:flex hidden'>
            <img src="/image/teknologilanscape.jpg" className=' w-full h-full' alt="" />
          </div>
          <div className=' w-full h-[25rem]  flex lg:hidden'>
            <img src="/image/teknologilanscape.jpg" className=' w-full h-full' alt="" />
          </div>
          <small className=' ml-1 lg:ml-0 text-sm text-gray-400 italic'>Smartwatch: Sahabat Digital Gen Z untuk Monitoring Kesehatan Sehari-hari</small>
        </div>
        <div className=' w-full text-wrap mt-2 p-3 flex flex-col gap-3 text-base'>
          <span className=' text-justify leading-8'>
            Bagi banyak Gen Z, teknologi sudah menjadi bagian tak terpisahkan dari kehidupan sehari-hari.
            Salah satu perangkat yang semakin populer di kalangan mereka adalah smartwatch.
            Lebih dari sekadar aksesori gaya, smartwatch kini menjadi alat penting untuk memantau kesehatan
            dan kebugaran, terutama bagi mereka yang menjalani rutinitas kerja padat.
          </span>
          <span className=' text-justify leading-8'>
            {`Cindy, seorang teller bank berusia 24 tahun, berbagi pengalamannya menggunakan 
            smartwatch sebagai alat bantu dalam menjaga kesehatan. "Aku suka pakai smartwatch 
            karena selain desainnya yang simpel dan cocok dengan outfit apa saja, juga bisa jadi 
            pengingat untuk minum air dan bergerak saat sudah terlalu lama duduk," ungkap Cindy.
            "Bahkan bisa menghitung berapa kalori yang terbakar dan jumlah langkah harian."`}
          </span>
          <span className=' text-justify leading-8'>
            {`Smartwatch memiliki berbagai fitur yang mendukung gaya hidup sehat, 
            seperti pemantauan detak jantung, penghitungan kalori, dan pengingat aktivitas fisik. 
            Cindy menyebut fitur untuk menghitung langkah harian 
            sebagai salah satu yang paling bermanfaat. "Kalau aku tahu gerak aku hari ini sedikit,
            aku biasanya pulang kerja langsung workout biar tetap aktif."`}
          </span>
          <span className=' text-justify leading-8'>
            {`
            Banyak dari mereka yang mulai memanfaatkannya untuk membuat keputusan sehari-hari 
            terkait kesehatan. "Kalau aku merasa kurang gerak, aku bisa menyesuaikan pilihan 
            makan biar kalori tetap seimbang," jelas Cindy. Ia bahkan terkadang pergi ke mal 
            untuk menambah jumlah langkah jika merasa aktivitas hariannya belum cukup.
            `}
          </span>
          <span className=' text-justify leading-8'>
            {`
                Dengan semakin terjangkaunya harga smartwatch, termasuk banyaknya pilihan merek 
                lokal, penggunaan perangkat ini di kalangan Gen Z kian meningkat. 
                Cindy memperkirakan lebih dari 80%
            `}
          </span>
          <span className=' text-justify leading-8'>
            {`generasinya sudah menggunakan atau tertarik untuk menggunakan smartwatch sebagai 
            bagian dari gaya hidup mereka. "Ini benar-benar membantu, terutama buat yang kerja 
            seharian. Dengan fitur-fitur yang ada, kita bisa lebih sadar akan kesehatan kita tanpa 
            harus selalu pergi ke dokter."`}
          </span>
          <span className=' text-justify leading-8'>
            Bagi pegawai muda yang ingin tetap bugar meski sibuk,
            smartwatch dapat menjadi solusi praktis untuk memantau kesehatan.
            Dengan berbagai fitur yang dirancang untuk mendukung aktivitas harian,
            smartwatch bukan lagi sekadar alat pelengkap, melainkan sahabat digital yang siap menjaga kesehatan Anda setiap saat.
          </span>
        </div>
      </div>
    </>
  )
}

export default NewsComponent