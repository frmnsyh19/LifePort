import NavbarMobile from "./components/NavbarMobile";
import React from "react";
import NavbarPc from "./components/NavbarPc";

import Headline from "./components/Headline";
import { NewsUpdate } from "./components/NewsUpdate";
import { CategoriNews } from "./components/CategoriNews";
import { Footer } from "./components/Footer";
import Thumbnail from "./components/Thumbnail";
// Import Swiper React components

const Swipers = React.lazy(
  () => import("./components/Swipers")
);

export default function Home() {
  return (
    <>
      <div className=" w-full flex flex-col bg-slate-100 text-neutral2371510849">
        <NavbarPc />
        <NavbarMobile />

        <Swipers />
        <Headline />
        <div className=" mt-4 lg:mt-20 w-full justify-center h-full items-center flex gap-2">
          <div className="w-full lg:w-[90%] flex flex-col lg:flex-row gap-2 p-3">
            <div className="w-full lg:w-[70%] flex-col justify-center items-center flex gap-2 lg:gap-7 ">
              <div className=" w-full flex justify-start items-center p-2 lg:p-3 border-b border-b-gray-500">
                <span className=" text-indigo-900 font-bold text-3xl">
                  News Update
                </span>
              </div>
              <div className="w-full p-1 flex-col justify-center items-center flex gap-7">
                <NewsUpdate />
              </div>
            </div>
            <div className=" w-full lg:w-[35%] gap-3 p-1">
              <CategoriNews />
              <Thumbnail />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
