import { ChevronDownIcon, ChevronUpIcon, LayoutDashboard } from 'lucide-react'
import React from 'react'
import menus from '@/assets/data/menus'
import MenuItems from './MenuItems'


interface MenuItmesTypes {
    menuIcon: React.ReactNode,
    menuName : string,
    isMenuOpen: boolean,
    subMenu: Array<MenuItmesTypes>
}

const SidebarMenus:React.FC = () => {


    return (
        <div className='flex h-[92%] flex-col justify-start items-start w-full mb-5 hover:overflow-auto overflow-hidden'>
            {
                menus.map((menu) => !menu.hide ? <MenuItems  menuIcon={menu.icon} menuName={menu.name} subMenu={menu.subMenu} menuUrl={menu.route} /> : null)
            }
        </div>
    )
}

export default SidebarMenus