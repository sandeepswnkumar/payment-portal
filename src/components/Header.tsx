import { Bell, Menu, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '@/redux/PaymentPortalSlice';
import Sidebar from './Sidebar';


const Header: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
  const isSideMenuOpen = useSelector((state) => state.menuOpen)
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (this.innerWidth < 1023) {
        setIsSmallScreen(true)
      } else if (this.innerWidth > 1023) {
        setIsSmallScreen(false)
        dispatch(toggleMenu(false))
      }
    })
  }, [])
  return (
    <div className='h-[65px] bg-slate-100 w-full flex justify-between items-center p-3'>
      <div>
        {
          !isSmallScreen ?
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> :

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" onClick={() => dispatch(toggleMenu(!isSideMenuOpen))}><Menu /></Button>
              </SheetTrigger>
              <SheetContent className='p-0 m-0'>
                  <Sidebar />
              </SheetContent>
            </Sheet>

        }
      </div>
      <div className='flex items-center'>
        {!isSmallScreen ?
          <div className='me-3 flex items-center bg-white p-2 rounded-3xl'>
            <Search className='w-5 h-5 me-2 text-gray-400' />
            <input className='bg-transparent focus:outline-none' type="text" />
          </div>
          : null}
        <div className='flex items-center'>

          <Bell className='me-3' />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className='me-3 flex items-center'>
                <Avatar className='me-3 w-9 h-9'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {!isSmallScreen ? <p>Sandeep</p> : null}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Header