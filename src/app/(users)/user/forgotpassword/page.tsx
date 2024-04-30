"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    IconBrandApple,
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function ForgotPassword() {
    const router = useRouter();

    return (
        <div className='flex  flex-col justify-around items-center md:flex-row md:justify-around lg:justify-around lg:flex-row p-2'>
            <div className=' grid-cols-2 justify-center items-center'>
                <div className=' flex flex-col justify-center '>

                    <div>
                        <Image alt='login image' src={"/images/forget.svg"} height={400} width={400} className=' h-full'></Image>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col shadow-lg p-6 justify-center items-center m-4 rounded-md'>
                <div className=' w-full '>
                    <div className=' flex  flex-row justify-between items-center w-full'>
                        <ChevronLeft className=' cursor-pointer' onClick={() => { router.push("./login") }} />
                        <h1 className=' text-center w-full'>Forgot password</h1>
                    </div>
                    <hr color='' className=' size-1 w-full m-2' />

                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                    <p>Enter the email address associated with</p>
                     <p>your account, and well email you a link</p>
                     <p>to reset your password.</p>
                    </div>
                    <Input type="email" placeholder="Email address" />

                    <Button className=' bg-blue-600 rounded-full  w-[200px] self-center'>Send reset link </Button>
              
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

