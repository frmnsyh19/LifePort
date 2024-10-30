import React from "react";

const Thumbnail = () => {
  return (
    <>
      <div className="flex w-full p-2 flex-col justify-center gap-4 items-center">
        <div className=" border-b border-gray-500 p-3 w-full flex justify-start">
          <p className=" capitalize text-lg text-gray-500">
            For You:
          </p>
        </div>
        <img
          src="/new/1.jpg"
          className=" rounded-lg w-full"
          alt=""
        />
        <img
          src="/new/2.jpg"
          className=" rounded-lg w-full"
          alt=""
        />
        <img
          src="/new/3.jpg"
          className=" rounded-lg w-full"
          alt=""
        />
      </div>
    </>
  );
};

export default Thumbnail;
