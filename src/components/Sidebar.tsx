import React, { useEffect } from 'react'
import assets from '@/assets/assets.ts'
import { ChevronUpIcon, ChevronDownIcon, LayoutDashboard, LogOutIcon } from 'lucide-react'
import SidebarMenus from './SidebarMenus'

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
        <SidebarMenus />
      </div>

      {/* Setting */}
      <div className='w-full h-[5%]'>
        <div className='flex h-full flex-col justify-start items-start w-full mb-5 overflow-hidden'>
          <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div className='flex justify-between main-menu w-full'>
              <div className='flex cursor-pointer'>
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