import React from 'react'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'
import NavBar from './NavBar.jsx'
import Main from './main.jsx'

function Root() {
  return (
    <>
      <div className="bg-linear-to-r from-black via-amber-600 to-black">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Root