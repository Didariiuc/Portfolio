import React from 'react'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'
import NavBar from './NavBar.jsx'
import Main from './main.jsx'

function Root() {
  return (
    <>
        <Main />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root