
import React from "react";
import { LayoutDashboard, Settings, User, Wallet } from "lucide-react";
interface menuType {
    id: string;
    name: string;
    hide : Boolean;
    route?: String;
    icon : React.ReactNode;
    subMenu : menuType[];

}

const menus:menuType[] = [
    {
        id : crypto.randomUUID(),
        name : "Dashboard",
        hide : false,
        route : '/',
        subMenu : [],
        icon : <LayoutDashboard /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "My Profile",
        hide : false,
        route : '',
        subMenu : [
            {
                id : crypto.randomUUID(),
                name : "Account Detail",
                route : 'account-detail',
                hide : false,
                subMenu : [],
                icon : '' ,
            },
            {
                id : crypto.randomUUID(),
                name : "Preferences",
                route : '/preference',
                hide : false,
                subMenu : [],
                icon : '' ,
            },
            {
                id : crypto.randomUUID(),
                name : "User",
                route : '/user',
                hide : false,
                subMenu : [],
                icon : '' ,
            }

        ],
        icon : <User /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "Wallets",
        hide : false,
        route : '',
        subMenu : [
            {
                id : crypto.randomUUID(),
                name : "Wallet Listing",
                route : '/wallets',
                hide : false,
                subMenu : [],
                icon : '' ,
            },
            {
                id : crypto.randomUUID(),
                name : "Payment",
                route : '/payments',
                hide : false,
                subMenu : [],
                icon : '' ,
            }

        ],
        icon : <Wallet /> ,
    },
    {
        id : crypto.randomUUID(),
        name : "Settings",
        route : '/settings',
        hide : false,
        subMenu : [],
        icon : <Settings />,
    }
]
export default menus;