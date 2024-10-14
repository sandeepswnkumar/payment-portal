import React from 'react'

interface PartTwoTopConfirmationProps {
    imgSrc: string,
    heading: string,
    subHeading: string
}

const PartTwoTopConfirmation: React.FC<PartTwoTopConfirmationProps> = ({ imgSrc, heading, subHeading }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className=' flex justify-center items-center'>
                <img src={imgSrc} className='p-0 m-0' alt="" />
            </div>
            <div className='flex justify-center items-center flex-col mt-10'>
                <h2 className='font-bold text-2xl'>{heading}</h2>
                <p className='text-xs'>{subHeading}</p>
            </div>
        </div>
    )
}

export default PartTwoTopConfirmation