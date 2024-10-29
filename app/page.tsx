import NavbarMobile from "./components/NavbarMobile";
import React from "react";
import NavbarPc from "./components/NavbarPc";

import Headline from "./components/Headline";
import { NewsUpdate } from "./components/NewsUpdate";
import { CategoriNews } from "./components/CategoriNews";
import { Footer } from "./components/Footer";
// Import Swiper React components

const Swipers = React.lazy(() => import('./components/Swipers'));

export default function Home() {
  return (
    <>

      <div className=" w-full flex flex-col bg-slate-100">
        <NavbarPc />
        <NavbarMobile />

        <Swipers />
        <Headline />
        <div className=" mt-4 lg:mt-20 w-full justify-center h-full items-center flex gap-2">
          <div className="w-full lg:w-[90%] flex flex-col lg:flex-row gap-2 p-3">
            <div className="w-full lg:w-[70%] flex-col justify-center items-center flex gap-7 ">
              <NewsUpdate />
            </div>
            <div className=" w-full lg:w-[35%] p-1">
              <CategoriNews />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
