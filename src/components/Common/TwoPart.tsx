import React from 'react'
import assets from '@/assets/assets'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})


const TwoPart:React.FC = () => {

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
        <div className='h-screen  w-full flex '>
            <div className='h-full w-full p-5 sm:hidden'>
                <div className=' h-full w-full rounded-2xl md:p-10 bg-customBlack-600'>
                    <div className='h-2/5 flex justify-center flex-col items-center'>
                        <div>
                            <img src={assets.logo} alt="logo" />
                        </div>
                        <div className=' text-white flex justify-center flex-col items-start text-center mt-6'>
                            <p className=' text-xl font-semibold md:px-12'>Sign in to access your personalized dashboard and continue working.</p>
                            <p className=' text-xs font-semibold mt-3'>Assess your dashboard monitor customer progress, efficiently manage classes, track assignments, and stay informed about school event and update</p>
                        </div>
                    </div>
                    <div className='h-3/5 flex justify-center items-center w-full'>
                        <div className='flex justify-center items-end w-[360px] h-[360px] rounded-full bg-gradient-to-t from-customBlack-400 to-customBlack-700'>
                            <div className='w-[280px] h-[280px] mb-8 shadow-lg rounded-full bg-gradient-to-t from-customBlack-400 to-customBlack-600 flex justify-center items-center'>
                                <img src={assets.wallet3d} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-full p-5 flex justify-center items-center'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className=' w-20 h-20 bg-gradient-to-b from-slate-300 rounded-full to-slate-50 bg-red-400 flex justify-center items-center'>
                            <img src={assets.userLogin} className='p-0 m-0' alt="" />
                        </div>
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h2 className='font-bold text-2xl'>Sign In for an Account</h2>
                            <p className='text-xs'>Enter your Details to Sign up.</p>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='w-3/5 flex justify-center flex-col items-center mt-10'>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl className='mt-1'>
                                            <Input placeholder="Email Address" className=' rounded-3xl focus-visible:ring-orange-500 focus-visible:border-0' {...field} />
                                        </FormControl>
                                        <FormMessage className='mt-1' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className='w-full mt-5'>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl className='mt-1'>
                                            <Input placeholder="*****" className=' rounded-3xl focus-visible:ring-orange-500 focus-visible:border-0' {...field} />
                                        </FormControl>
                                        <FormMessage className='mt-1' />
                                    </FormItem>
                                )}
                            />
                            <Button className='w-full mt-5 rounded-3xl bg-orange-500 hover:bg-orange-400' type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default TwoPart