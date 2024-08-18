import React from 'react'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'


const Main: React.FC = () => {
    return (
        <>
            <Header />
            <div className="relative flex-1 overflow-hidden">
                <div className="absolute inset-0 overflow-auto bg-white rounded-xl p-4">
                    
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Main