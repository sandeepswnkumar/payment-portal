import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface MenuItmesTypes {
    menuIcon: React.ReactNode,
    menuName: string,
    subMenu: Array<MenuItmesTypes>,
    menuUrl: string
}

const MenuItems: React.FC<MenuItmesTypes> = ({ menuIcon, menuName, subMenu, menuUrl }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleOpenCloseMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='flex flex-col justify-center items-start mb-5 w-full'>
            <div onClick={handleOpenCloseMenu} className='flex cursor-pointer justify-between main-menu w-full'>
                {
                    subMenu.length > 0 ?
                        <>
                            <div className='flex'>
                                {menuIcon}
                                <span className='ms-2'>{menuName}</span>
                            </div>
                            <div>{isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
                        </> :
                        <Link to={menuUrl}>
                            <div className='flex'>
                                {menuIcon}
                                <span className='ms-2'>{menuName}</span>
                            </div>
                        </Link>
                }

            </div>
            {
                subMenu.length > 0 && isMenuOpen ?
                    <div className='sub-menu border-l-2 border-gray-400 ms-3 mt-5'>
                        {
                            subMenu.map((menu) => (
                                <MenuItems menuIcon={menu.icon} menuName={menu.name} subMenu={menu.subMenu} menuUrl={menu.route} />
                            ))
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default MenuItems