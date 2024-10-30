import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-indigo-900  p-10 text-white">
        <aside>
          <Image
            src={"/image/logo.png"}
            width={200}
            height={150}
            alt=""
          />
          <p className="font-bold">
            News LifePort | LifeStyle & Technology
          </p>
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            - All right reserved
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <div className=" p-1">
                <FaTwitter className=" text-4xl text-white" />
              </div>
            </a>
            <a>
              <div className=" p-1">
                <AiFillInstagram className=" text-4xl text-white" />
              </div>
            </a>
            <a>
              <div className=" p-1">
                <FaFacebookSquare className=" text-4xl text-white" />
              </div>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};
