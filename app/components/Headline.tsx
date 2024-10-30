"use client";

import React from "react";

import "../style.css";

import Link from "next/link";
import Button from "@mui/material/Button";

const Headline = () => {
  return (
    <>
      <div className="w-full flex justify-center  items-center p-1">
        <div className="w-full lg:w-[90%] flex lg:flex-row flex-col gap-1 justify-start p-1">
          <div className="cursor-pointer w-full p-1 lg:p-0 rounded-md lg:w-[70%] lg:h-[20rem] flex-col">
            <img
              src="/image/newheadline.jpg"
              className=" w-full h-52 lg:h-full"
              alt=""
            />
            <div className=" w-full p-2 flex justify-start items-center">
              <Link href="/about">
                <Button
                  variant="contained"
                  className="bg-indigo-900 capitalize ml-1 lg:ml-4 text-sm text-white font-bold lg:text-lg p-2 lg:p-2">
                  Selengkapnya tentang kami
                </Button>
              </Link>
            </div>
          </div>
          <div className=" w-full lg:w-[25%] lg:h-96  justify-center items-center gap-2 lgflex-row flex lg:flex-col p-1">
            <div className=" w-full h-48">
              <img
                src="/tubnail/1.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
            <div className=" w-full h-48">
              <img
                src="/tubnail/2.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
