import React from 'react'
import assets from '@/assets/assets'
import PartOne from '@/components/TwoPart/PartOne'
import PartTwoTopConfirmation from '@/components/TwoPart/PartTwoTopConfirmation'
import { Button } from '@/components/ui/button'

const ForgetPasswordConfirmation: React.FC = () => {
    return (
        <div className='h-screen  w-full flex '>
            <PartOne
                imgSrc={assets.passwordCheck}
                heading='Check your email and click on password reset url to create new password'
                subHeading='Retrieve access to your dashboard to manage tasks efficiently, stay updated on student progress, track assignments, and coordinate school activities.'
            />
            <div className='h-full w-full p-5 flex justify-center items-center'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <PartTwoTopConfirmation
                        imgSrc={assets.mailSent}
                        heading='Check your mail'
                        subHeading='Check your email and open the link we sent to continue'
                    />
                    <div className='w-3/5 flex justify-center flex-col items-center'>
                        <Button className='w-full mt-5 rounded-3xl bg-orange-500 hover:bg-orange-400' type="button">Sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordConfirmation