import React from "react";
import OurTeam from "../components/AboutComponent/OurTeam";
import { Footer } from "../components/Footer";
import HeaderAbout from "../components/AboutComponent/HeaderAbout";
import NavbarMobile from "../components/NavbarMobile";
import NavbarPc from "../components/NavbarPc";
import AboutHeade from "../components/AboutComponent/AboutHeade";

const page = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarPc />
      <HeaderAbout />
      <AboutHeade />
      <OurTeam />
      <Footer />
    </>
  );
};

export default page;
