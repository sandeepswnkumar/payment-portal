import React from 'react'
import assets from '@/assets/assets'

const PartOne: React.FC<{ imgSrc: string, heading: string, subHeading: string }> = ({ imgSrc, heading, subHeading }) => {
    return (
        <div className='h-full w-full p-5 md:hidden lg:block'>
            <div className=' h-full w-full rounded-2xl md:p-10 bg-customBlack-600'>
                <div className='h-2/5 flex justify-center flex-col items-center'>
                    <div>
                        <img src={assets.logo} alt="logo" />
                    </div>
                    <div className=' text-white flex justify-center flex-col items-center text-center mt-6'>
                        <p className=' text-xl font-semibold md:px-12'>{heading}</p>
                        <p className=' text-xs font-semibold mt-3'>{subHeading}</p>
                    </div>
                </div>
                <div className='h-3/5 flex justify-center items-center w-full'>
                    <div className='flex justify-center items-end w-[55%] h-[100%] rounded-full bg-gradient-to-t from-customBlack-400 to-customBlack-700'>
                        <div className='w-[80%] h-[80%] mb-8 shadow-lg rounded-full bg-gradient-to-t from-customBlack-400 to-customBlack-600 flex justify-center items-center'>
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartOne