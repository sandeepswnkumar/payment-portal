
import React from "react";
import { LayoutDashboard } from "lucide-react";
interface menuType {
    id: string;
    name: string;
    route?: String
    icon : React.ReactNode
    subMenu : menuType[]

}

const menus:menuType[] = [
    {
        id : crypto.randomUUID(),
        name : "Dashboard",
        route : '/',
        subMenu : [],
        icon : <LayoutDashboard /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "My Profile",
        route : '',
        subMenu : [
            {
                id : crypto.randomUUID(),
                name : "Account Detail",
                route : '/account-detail',
                subMenu : [],
                icon : <LayoutDashboard /> ,
            },
            {
                id : crypto.randomUUID(),
                name : "Preferences",
                route : '/preference',
                subMenu : [],
                icon : <LayoutDashboard /> ,
            },
            {
                id : crypto.randomUUID(),
                name : "User",
                route : '/user',
                subMenu : [],
                icon : <LayoutDashboard /> ,
            }

        ],
        icon : <LayoutDashboard /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "Wallets",
        route : '',
        subMenu : [
            {
                id : crypto.randomUUID(),
                name : "Wallet Listing",
                route : '/wallets',
                subMenu : [],
                icon : <LayoutDashboard /> ,
            },
            {
                id : crypto.randomUUID(),
                name : "Payment",
                route : '/payments',
                subMenu : [],
                icon : <LayoutDashboard /> ,
            }

        ],
        icon : <LayoutDashboard /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "Settings",
        route : '/settings',
        subMenu : [],
        icon : <LayoutDashboard /> ,
    }
]
export default menus;