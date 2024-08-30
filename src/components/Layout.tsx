import React from 'react'
import Main from '@/pages/Main'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='relative grid grid-cols-12 bg-slate-100 h-screen overflow-hidden'>
      <div className='max-sm:hidden md:hidden lg:block col-span-3 xl:col-span-2 h-full'>
        <Sidebar />
      </div>
      <div className='sm:col-span-12 col-span-12 lg:col-span-9 xl:col-span-10 h-full flex flex-col'>
        <Main />
      </div>
    </div>
  )
}

export default Layout