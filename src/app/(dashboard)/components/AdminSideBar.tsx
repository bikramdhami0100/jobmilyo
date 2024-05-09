
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, Contact2Icon, FacebookIcon, GithubIcon, ImageIcon, LayoutDashboard, LayoutList, LogOut, LogOutIcon, LucideWrench, MessagesSquare, Moon, ScanSearch, Settings, SettingsIcon, SquarePlus, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from 'next/navigation'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"


import { signOut, useSession } from 'next-auth/react'


function AdminSideBar() {
    const router = useRouter();
    const { setTheme, theme } = useTheme();

    // const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]';
       const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]';
    return (
        <div className={`${navbarBgColor} min-h-screen w-full lg:visible md:visible`}>

            <div className=' flex flex-col justify-between items-start gap-[200px] p-2 '>

                <div className=' flex flex-col w-full '>
                    <div className=' text-center font-extrabold text-3xl mb-[100px]'>
                        <h1 className=' underline underline-offset-2'>Admin Panel</h1>
                    </div>

                    <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                        router.push("/admin/dashboard")
                    }} >
                        <LayoutDashboard />
                        Dashboard
                    </div>
                    <div className=' hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                        router.push("/admin/newjob")
                    }} >
                        <SquarePlus />
                        New Job
                    </div>
                    <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                        router.push("/admin/joblist")
                    }} >
                        <LayoutList />
                        Job list
                    </div>
                    <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                        router.push("/admin/viewresume")
                    }} >
                        <ScanSearch />
                        View Resume
                    </div>
                    <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                        router.push("/admin/contactlist")
                    }} >
                        <Contact2Icon />
                        Contact list
                    </div>

                </div>
                <div className=' w-full'>
                    {/* <div className=' rounded-full border bg-blue-600 p-2'>
                                                <Settings />
                                            </div> */}

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">
                                <div className=' flex flex-row gap-2 cursor-pointer  p-2 rounded-md w-full' onClick={() => {
                                    router.push("/admin/profile")
                                }}>
                                    <Settings />
                                    Admin setting
                                </div></Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <div>
                                        <AlertDialogCancel className=' w-full h-full outline-none border-none p-0'>
                                            <div className='hover:bg-blue-700 rounded-md cursor-pointer  w-full p-2 flex  items-center gap-4 font-extrabold text-[20px]'>
                                                <SettingsIcon />
                                                setting
                                            </div>
                                        </AlertDialogCancel>
                                        <AlertDialogCancel className=' w-full h-full outline-none border-none p-0'>
                                            <div className='hover:bg-blue-700 rounded-md cursor-pointer  w-full p-2 flex  items-center gap-4 font-extrabold text-[20px]'>
                                                <GithubIcon />
                                                Github
                                            </div>
                                        </AlertDialogCancel>
                                        <AlertDialogCancel className=' w-full h-full outline-none border-none p-0'>
                                            <div className='hover:bg-blue-700 rounded-md cursor-pointer  w-full p-2 flex  items-center gap-4 font-extrabold text-[20px]'>
                                                <FacebookIcon />
                                                Facebook
                                            </div>
                                        </AlertDialogCancel>
                                        <AlertDialogCancel className=' w-full h- outline-none border-none p-0'>
                                            <div className='hover:bg-blue-700 rounded-md cursor-pointer  w-full p-2 flex  items-center gap-4 font-extrabold text-[20px]'>
                                                <LogOut />
                                                Log out
                                            </div>
                                        </AlertDialogCancel>

                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>



                </div>
            </div>

        </div>
    )
}

export default AdminSideBar
