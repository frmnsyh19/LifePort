import React from "react";
import {
  FiCalendar,
  FiUser,
} from "react-icons/fi";

export const TitleSport = () => {
  return (
    <>
      <div className=" w-full flex justify-center items-center p-2">
        <div className=" w-[35rem] flex-col gap-5 flex justify-center p-2 items-center ">
          <div className=" w-16 p-1 flex-col gap-2 rounded-md bg-slate-200 flex justify-center items-center">
            <p className=" text-base text-gray-400">
              Sport
            </p>
          </div>
          <span className=" text-2xl capitalize font-bold text-center text-slate-400">
            bersepeda adalah olahraga kardio yang
            lebih bagus dari pada lari apakah
            benar?
          </span>
          <div className=" flex w-full flex-col items-center justify-center lg:flex-row">
            <div className=" p-2 flex flex-row items-center gap-1">
              <FiUser className=" text-sm lg:text-base text-gray-400" />
              <p className=" text-sm lg:text-base  text-gray-400">
                Maulana Ishaq - 2371510138,
              </p>
            </div>
            <div className=" p-2 flex flex-row items-center gap-1">
              <FiCalendar className=" text-sm lg:text-base text-gray-400" />
              <p className=" text-sm lg:text-base text-gray-400">
                26 Oktober 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
