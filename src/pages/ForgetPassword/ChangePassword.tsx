import React from 'react'
import assets from '@/assets/assets'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import PartOne from '@/components/TwoPart/PartOne'
import PartTwoTopContent from '@/components/TwoPart/PartTwoTopContent'
import CustomInput from '@/components/CustomInput'

const formSchema = z.object({
    npassword: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    cpassword: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    })
})


const ChangePassword: React.FC = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            npassword: "",
            cpassword: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }


    return (
        <div className='h-screen  w-full flex '>
            <PartOne
                imgSrc={assets.password}
                heading='Enter your new password to secure your account and proceed'
                subHeading='Retrieve access to your dashboard to manage tasks efficiently, stay updated on student progress, track assignments, and coordinate school activities.'
            />
            <div className='h-full w-full p-5 flex justify-center items-center'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <PartTwoTopContent
                        imgSrc={assets.unlock}
                        heading='Change Password'
                        subHeading='Enter your new password to secure you account.'
                    />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='w-3/5 flex justify-center flex-col items-center mt-10'>
                            <CustomInput type='password' name='npassword' form={form.control} placeholder='New Password' label='New Password' />
                            <CustomInput type='password' name='cpassword' form={form.control} placeholder='Confirmation Password' label='Confirmation Password' />
                            <Button className='w-full mt-5 rounded-3xl bg-orange-500 hover:bg-orange-400' type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword