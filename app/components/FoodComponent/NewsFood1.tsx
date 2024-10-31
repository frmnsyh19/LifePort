import React from "react";

export const NewsFood1 = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-1 p-1 lg:p-2">
        <div className=" w-full h-64 lg:h-96 flex">
          <img
            src="/image/imgfood1.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>
        {/* gambar */}
        <small className=" ml-1 lg:ml-0 text-sm text-gray-400 italic">
          Nasi beku bagus untuk pola makan dan
          konsumsi masyarakat
        </small>
        {/* contecx */}
        <div className=" mt-1 p-1 lg:p-0 flex justify-start flex-col gap-4 text-justify text-base leading-8">
          <span>{`meningkatnya popularitas nasi beku di kalangan konsumen 
          Dalam wawancara dengan rudy, seorang pelaku industri nasi beku, kami 
          menggali alasan di balik semakin populernya produk ini di masyarakat. Rudy 
          menjelaskan bahwa ia terjun ke industri nasi beku karena melihat potensi besar 
          dalam menyediakan solusi makanan yang praktis. Dengan gaya hidup yang 
          semakin cepat, banyak orang kini mencari alternatif yang tidak hanya cepat, tetapi 
          juga sehat. Menurutnya, nasi beku menawarkan kemudahan penyajian tanpa 
          mengorbankan rasa atau nilai gizi, sehingga konsumen tetap bisa menikmati 
          makanan bergizi meskipun dalam keadaan sibuk. `}</span>

          <span>{`Ketika ditanya tentang mengapa nasi beku semakin diminati, rudy menyebutkan 
              dua faktor utama: kemudahan dan kepraktisan. Dalam rutinitas yang padat, nasi 
              beku jadi cara cepat untuk menyajikan makanan tanpa proses memasak yang 
              panjang. Hal ini sangat relevan di zaman sekarang, di mana banyak orang 
              menginginkan efisiensi dalam setiap aspek kehidupan, termasuk makanan.`}</span>
          <span>
            {`Rudy juga menyoroti keberagaman produk nasi beku yang semakin banyak. Saat 
            ini, ada berbagai jenis nasi beku, mulai dari nasi putih biasa hingga nasi yang 
            dipadukan dengan sayuran, daging, dan berbagai bumbu. Ini memberi konsumen 
            lebih banyak pilihan, membuat nasi beku semakin menarik. Dengan kombinasi 
            yang beragam, orang bisa mendapatkan rasa yang berbeda hanya dengan 
            menggunakan produk beku.`}
          </span>

          <span>{`Berbicara tentang nilai gizi, rudy menjelaskan bahwa nasi beku dan nasi biasa 
              umumnya memiliki nilai gizi yang setara, asalkan nasi beku itu dibuat dari bahan 
              berkualitas. Ia menekankan bahwa proses pemukuan seharusnya tidak menambah 
              bahan pengawet atau pemanis yang bisa merusak kualitas gizi. Meskipun proses 
              pemukuan bisa mempengaruhi tekstur dan rasa, jika produksi dilakukan dengan 
              baik,`}</span>

          <span>{`terhadap nasi beku juga menarik untuk dicermati. Rudy menyatakan 
              bahwa banyak konsumen kini lebih memperhatikan keamanan dan 
              kualitas produk. Meskipun banyak yang puas dengan kenyamanan nasi 
              beku, ada kekhawatiran soal rasa dan tekstur akibat proses pembekuan. 
              Kepercayaan terhadap merek serta adanya sertifikasi keamanan pangan 
              jadi faktor penting dalam keputusan pembelian. Ini menunjukkan 
              bahwa konsumen semakin cerdas dalam memilih produk, 
              memperhatikan kemudahan dan kualitas yang mereka konsumsi.`}</span>

          <span>{`Dalam konteks tren makanan sehat saat ini, nasi beku berperan penting. 
            Dengan menawarkan opsi penyajian makanan bergizi yang praktis, nasi 
            beku memenuhi kebutuhan orang-orang yang ingin menjaga pola 
            makan seimbang tanpa mengorbankan waktu dan kualitas. Rudy 
            mencatat bahwa semakin banyak orang beralih ke nasi beku sebagai 
            solusi efisien untuk gaya hidup sehat. Ia juga menyoroti meningkatnya 
            kesadaran masyarakat akan pentingnya bahan-bahan alami dan 
            pengurangan makanan olahan, yang semakin membuat nasi beku 
            relevan.`}</span>
          <span className="">{`Melihat ke depan, rudy optimis bahwa industri nasi beku akan terus 
            berkembang. Ia percaya bahwa inovasi adalah kunci untuk memenuhi 
            kebutuhan konsumen. Dengan menghadirkan rasa baru, kemasan 
            menarik, dan cara distribusi yang lebih efisien, produk nasi beku bisa 
            menjangkau lebih banyak orang. Pemasaran online juga dianggap 
            peluang besar, memungkinkan mereka untuk menjangkau pelanggan di 
            seluruh Indonesia dengan lebih efektif. `}</span>

          <span>{`Rudy juga berharap ada lebih banyak kolaborasi dengan petani lokal 
            dan produsen bahan baku. Ini bisa membantu meningkatkan kualitas 
            produk sekaligus mendukung perekonomian lokal. Dengan cara ini, 
            nasi beku tidak hanya menjadi pilihan makanan praktis, tetapi juga 
            berkontribusi pada keberlanjutan ekonomi lokal.`}</span>
          <span>{`Dari obrolan dengan rudy, jelas bahwa nasi beku bukan hanya sekadar 
              pilihan makanan, tetapi sudah menjadi bagian penting dari gaya hidup 
              modern. Dengan kemudahan, nilai gizi yang baik, dan relevansinya 
              dalam tren makanan sehat, nasi beku punya potensi besar untuk terus 
              berkembang.`}</span>
        </div>
      </div>
    </>
  );
};
