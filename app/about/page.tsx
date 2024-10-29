import React from 'react'
import OurTeam from '../components/AboutComponent/OurTeam'
import { Footer } from '../components/Footer'
import HeaderAbout from '../components/AboutComponent/HeaderAbout'
import NavbarMobile from '../components/NavbarMobile'
import NavbarPc from '../components/NavbarPc'

const page = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarPc />
      <HeaderAbout />
      <OurTeam />
      <Footer />
    </>
  )
}

export default page