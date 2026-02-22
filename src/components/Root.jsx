import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

function Root() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d] text-neutral-200">
      
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-900/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-cyan-900/10 blur-[140px]" />
      </div>

      {/* App Shell */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />

        <main className="flex-1 px-4 pt-20 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Root