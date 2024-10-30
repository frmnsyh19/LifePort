import React from "react";

import "../style.css";

const HeaderAbout = () => {
  return (
    <>
      <div
        className=" w-full flex justify-center items-center h-72 lg:h-96"
        id="bgabout">
        <img
          src="/fashion/headerabout.png"
          className=" p-1 mt-10 w-[50rem] lg:w-[48rem]"
          alt=""
        />
      </div>
    </>
  );
};

export default HeaderAbout;
