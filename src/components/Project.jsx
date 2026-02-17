import React from 'react'

function Project() {
  return (
    <div>
      <div className='text-white text-3xl font-bold flex justify-center items-center gap-4 mb-3'>
        Projects
      </div>

      <div className='text-white flex justify-center items-center gap-4'>
        <div className='space-y-5'>
          <div className='p-5 border-2 rounded-2xl bg-amber-600 font-bold text-xl'>Hospital Management System</div>
          <div className='p-5 border-2 rounded-2xl bg-amber-600 font-bold text-xl'>Bus Ticket Booking</div>
        </div>
        <div className='space-y-5'>
          <div className='p-5 border-2 rounded-2xl bg-amber-600 font-bold text-xl'>Hotel Management System</div>
          <div className='p-5 border-2 rounded-2xl bg-amber-600 font-bold text-xl'>E-Commerce Website</div>
        </div>
      </div>
    </div>
  )
}

export default Project
