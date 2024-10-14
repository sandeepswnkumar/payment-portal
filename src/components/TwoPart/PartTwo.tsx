import React from 'react'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import assets from '@/assets/assets'
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomInput from '../CustomInput'
import PartTwoTopContent from './PartTwoTopContent'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})


const PartTwo: React.FC = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className='h-full w-full p-5 flex justify-center items-center'>
            <div className='w-full flex justify-center items-center flex-col'>
                <PartTwoTopContent
                    imgSrc={assets.userLogin}
                    heading='Sign In for an Account'
                    subHeading='Enter your Details to Sign up.'
                />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-3/5 flex justify-center flex-col items-center mt-10'>
                        <CustomInput type='email' name='email' form={form.control} placeholder='Email Address' label='Email Address' />
                        <CustomInput type='password' name='password' form={form.control} placeholder='*****' label='Password' />
                        <Button className='w-full mt-5 rounded-3xl bg-orange-500 hover:bg-orange-400' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PartTwo