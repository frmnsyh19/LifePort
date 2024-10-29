import { Footer } from "../components/Footer"
import NavbarMobile from "../components/NavbarMobile"
import NavbarPc from "../components/NavbarPc"
import NewsComponent from "../components/teknologicomponent/NewsComponent"
import SomethingTeknologi from "../components/teknologicomponent/SomethingTeknologi"
import TitleTeknologi from "../components/teknologicomponent/TitleTeknologi"




const page = () => {
  return (
    <>
      <div className="w-full bg-slate-100 text-neutral flex flex-col">
        <NavbarMobile />
        <NavbarPc />
        <TitleTeknologi />
        <div className=" w-full flex justify-center items-center p-1">
          <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start justify-center lg:flex-row gap-1">
            <NewsComponent />
            {/* something fresh */}
            <SomethingTeknologi />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default page