import Image from 'next/image'
import React from 'react'

const NewsComponent = () => {
  return (
    <>
      <div className=" w-full lg:w-[65%] p-2">
        <div className=' w-full flex flex-col gap-2 p-0 lg:p-2'>
          <div className=' w-full h-96 border border-fuchsia-600 lg:flex hidden' id='imagenews'>
          </div>
          <div className=' w-full h-[25rem] border border-fuchsia-600 flex lg:hidden'
            id='newshealthy'></div>
          <small className=' ml-1 lg:ml-0 text-sm text-gray-400 italic'>Posisi Duduk yang Tepat untuk Mencegah
            Gangguan Otot, Tulang dan Mata Saat Bekerja</small>
        </div>
        <div className=' w-full text-wrap mt-2 p-3 flex flex-col '>
          <span className='text-base text-neutral text-justify'>
            Bagi banyak pekerja kantoran, duduk di depan komputer selama berjam-jam sudah
            menjadi rutinitas sehari-hari. Namun, gaya hidup yang tampaknya sederhana ini
            bisa menimbulkan masalah kesehatan serius, terutama pada otot, tulang, dan
            mata. Menurut Dr. Stellon Salim, seorang dokter spesialis kedokteran okupasi,
            kebiasaan duduk terlalu lama dapat memicu berbagai gangguan fisik, mulai dari
            nyeri pinggang hingga mata kering, yang jika dibiarkan dapat berlanjut menjadi
            kondisi kesehatan yang lebih parah.
          </span>
          <span className=' text-base capitalize font-bold'>
            <br />Dampak Duduk Lama terhadap Kesehatan
          </span>
          <span className=' text-base text-neutral mt-2 text-justify'>
            {`Dr. Stellon menjelaskan bahwa duduk dalam jangka waktu lama dengan posisi yang
            tidak tepat dapat menyebabkan nyeri pinggang atau low back pain (LBP), bahkan
            dalam beberapa kasus lebih parah dapat berujung pada saraf terjepit atau hernia
            nucleus pulposus. "Jika tidak ditangani, masalah ini bisa memburuk seiring
            bertambahnya usia, dan menghambat produktivitas di tempat kerja," ujarnya.`}
            <br />
            <br />
            {`Selain masalah pada tulang belakang, dry eye atau mata kering juga sering dialami
            oleh pekerja kantoran. Ini terjadi akibat terlalu lama menatap layar komputer tanpa
            istirahat yang cukup. "Mata yang terus-menerus berakomodasi saat melihat layar
            menyebabkan rasa lelah, nyeri, dan bahkan kemerahan," tambah Dr. Stellon.`}
          </span>
          {/* paragraf */}
          <span className=' text-base capitalize font-bold'>
            <br /> Pentingnya Posisi Duduk yang Tepat
          </span>
          <span className=' text-base text-neutral mt-2 text-justify'>
            {` Selain masalah pada tulang belakang, dry eye atau mata kering juga sering dialami
            oleh pekerja kantoran. Ini terjadi akibat terlalu lama menatap layar komputer tanpa
            istirahat yang cukup. "Mata yang terus-menerus berakomodasi saat melihat layar
            menyebabkan rasa lelah, nyeri, dan bahkan kemerahan," tambah Dr. Stellon.`}
          </span>
          {/* paragraf */}
          <span className=' text-base capitalize font-bold'>
            <br /> Aturan Istirahat yang Disarankan
          </span>
          <span className=' text-base text-neutral mt-2 text-justify'>
            {`Selain memperbaiki posisi duduk, Dr. Stellon menekankan pentingnya istirahat
            secara berkala. "Ada aturan sederhana yang bisa diikuti, yaitu aturan 20-20-20.
            Setiap 20 menit, istirahatkan mata selama 20 detik dengan melihat benda atau
            tembok yang berjarak 20 kaki (sekitar 6 meter)," sarannya. Jika aturan ini terasa sulit,
            istirahat singkat selama 5-15 menit setiap 2 jam juga dapat membantu mengurangi
            kelelahan otot dan mata`}
          </span>
          {/* paragraf */}
          <span className=' text-base capitalize font-bold'>
            <br /> Investasi pada Alat Pendukung Kesehatan
          </span>
          <span className=' text-base text-neutral mt-2 text-justify'>
            {`Dr. Stellon juga merekomendasikan beberapa alat sederhana namun efektif yang
            bisa membantu menjaga postur tubuh dan kesehatan mata selama bekerja.
            Standing laptop atau penyangga laptop dapat digunakan untuk memastikan layar
            berada pada level yang tepat, sehingga kepala tidak perlu terus-menerus
            menunduk. Selain itu, penggunaan footrest dapat membantu mengurangi
            kelelahan pada otot kaki jika kursi terlalu tinggi.
            "Sederhana, tetapi alat-alat ini adalah investasi jangka panjang bagi kesehatan
            pekerja kantoran. Dengan memperbaiki postur dan memperhatikan kesehatan
            mata, kinerja bisa lebih produktif dan terhindar dari berbagai gangguan kesehatan,"
            kata Dr. Stellon` }
          </span>
          {/* paragraf */}
          <span className=' text-base capitalize font-bold'>
            <br /> Kesimpulan
          </span>
          <span className=' text-base text-neutral mt-2 text-justify'>
            {`Dengan semakin banyaknya pekerjaan kantoran yang menuntut kita duduk dalam
            waktu lama, menjaga postur tubuh yang baik dan rutin beristirahat sangat penting
            untuk mencegah masalah otot, tulang, dan mata. Posisi duduk yang benar, alat-alat
            pendukung yang tepat, serta kebiasaan istirahat yang teratur adalah kunci untuk
            menjaga kesehatan dan produktivitas di tempat kerja.
            "Jangan anggap remeh nyeri pinggang atau mata lelah. Mulailah memperbaiki
            kebiasaan duduk dan perhatikan tanda-tanda awal masalah kesehatan. Dengan
            begitu, kita bisa bekerja lebih nyaman dan produktif," saran dari Dr. Stellon.` }
          </span>
        </div>
      </div>
    </>
  )
}

export default NewsComponent