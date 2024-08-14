import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='h-screen w-40 bg-green-500'>
            dsdd
            <Outlet />
        </div>
    )
}

export default Main