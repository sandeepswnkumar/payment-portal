import React, { useEffect } from 'react'
import assets from '@/assets/assets.ts'
import { ChevronUpIcon, ChevronDownIcon, LayoutDashboard, LogOutIcon } from 'lucide-react'

const Sidebar: React.FC = () => {
  useEffect(() => {
    console.log("menus", assets.menus)
  }, [])
  return (
    <div className='bg-slate-100  w-full h-screen p-5 mb-10'>
      <div className='h-[95%] flex flex-col'>

        {/* Logos */}
        <div className='h-[8%] mt-8 mb-10  flex justify-center'>
          <img src={assets.logo} alt="" className='w-30' />
        </div>

        {/* Menus */}
        <div className='flex h-[92%] flex-col justify-start items-start w-full mb-5 hover:overflow-auto overflow-hidden'>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex '>
                <LayoutDashboard />
                <span className='ms-2'>My Profile</span>
              </div>
              {/* <ChevronUpIcon /> */}
              <div><ChevronDownIcon /></div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex'>
                <LayoutDashboard />
                <span className='ms-2'>My Profile</span>
              </div>
              {/* <ChevronUpIcon /> */}
              <div><ChevronDownIcon /></div>
            </div>
            <div className='sub-menu border-l-2 border-gray-400 ms-3 mt-3'>
              <div className='flex sub-menu-item  justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex'>
                <LayoutDashboard />
                <span className='ms-2'>My Profile</span>
              </div>
              {/* <ChevronUpIcon /> */}
              <div><ChevronDownIcon /></div>
            </div>
            <div className='sub-menu border-l-2 border-gray-400 ms-3 mt-3'>
              <div className='flex sub-menu-item  justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex'>
                <LayoutDashboard />
                <span className='ms-2'>My Profile</span>
              </div>
              {/* <ChevronUpIcon /> */}
              <div><ChevronDownIcon /></div>
            </div>
            <div className='sub-menu border-l-2 border-gray-400 ms-3 mt-3'>
              <div className='flex sub-menu-item  justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
              <div className='flex sub-menu-item justify-center items-center mt-3'>
                <span className='ms-2'>Account Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Setting */}
      <div className='w-full h-[5%]'>
        <div className='flex h-full flex-col justify-start items-start w-full mb-5 hover:overflow-auto overflow-hidden'>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex'>
                <LogOutIcon />
                <span className='ms-2'>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar