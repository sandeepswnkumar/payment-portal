import React from 'react'

interface PartTwoTopContentProps {
    imgSrc: string,
    heading: string,
    subHeading: string
}

const PartTwoTopContent: React.FC<PartTwoTopContentProps> = ({ imgSrc, heading, subHeading }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className=' w-20 h-20 bg-gradient-to-b from-slate-300 rounded-full to-slate-50 bg-red-400 flex justify-center items-center'>
                <img src={imgSrc} className='p-0 m-0' alt="" />
            </div>
            <div className='flex justify-center items-center flex-col mt-3'>
                <h2 className='font-bold text-2xl'>{heading}</h2>
                <p className='text-xs'>{subHeading}</p>
            </div>
        </div>
    )
}

export default PartTwoTopContent