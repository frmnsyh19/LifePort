import React from "react";
import NavbarMobile from "../components/NavbarMobile";
import NavbarPc from "../components/NavbarPc";
import { TitleSport } from "../components/sportscomponent/TitleSport";
import { NewsSport } from "../components/NewsSport";
import { Footer } from "../components/Footer";
import TittleSpotTwo from "../components/sportscomponent/TittleSpotTwo";
import NewsSport2 from "../components/NewsSport2";
import { SomethingFresh2 } from "../components/sportscomponent/SomethingFresh2";

const page = () => {
  return (
    <>
      <div className="  w-full flex flex-col bg-slate-100">
        <NavbarMobile />
        <NavbarPc />
        <div className=" w-full flex justify-center f items-center p-1">
          <div className=" w-full lg:w-[90%] flex flex-col lg:justify-start justify-center lg:flex-row gap-1">
            <div className=" w-full flex flex-col lg:flex-row">
              <div className="w-full flex-col gap-5 lg:w-[65%] lg:p-2">
                <div
                  className="w-full flex flex-col"
                  id="news1">
                  <TitleSport />
                  <NewsSport />
                </div>
                <div className="w-full flex flex-col mt-5">
                  <TittleSpotTwo />
                  <NewsSport2 />
                </div>
              </div>
              <SomethingFresh2 />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
