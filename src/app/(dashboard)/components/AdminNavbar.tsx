
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, Contact2Icon, LayoutDashboard, LayoutList, LogOut, MessagesSquare, Moon, ScanSearch, SquarePlus, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import Link from 'next/link'

import { signOut, useSession } from 'next-auth/react'
import { IconBookmarkEdit } from '@tabler/icons-react'

function AdminNavbar() {
    
   
   
    const session = useSession();

    const router = useRouter();
    if (session.status == "authenticated") {
        useEffect(() => {
            // Function to set a cookie
            const setCookie = (name: string, value: any, days: number) => {
                const expires = new Date(Date.now() + days * 864e5).toUTCString();
                document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
            };

            // Call setCookie function to set your desired cookie
            setCookie('user', session.data.user?.email, 1); // 30 days expiry, adjust as needed
        }, []);


    }
    if (session.status == 'unauthenticated') {
        useEffect(() => {
            // Function to set a cookie
            const showCookie = (name: string, value: any, days: number) => {
                const expires = new Date(Date.now() + days * 864e5).toUTCString();
                document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
            };

            // Call setCookie function to set your desired cookie
            showCookie('user', "", 1); // 30 days expiry, adjust as needed
        }, []);
    }
    const { setTheme, theme } = useTheme();

    const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]'; // Set background color based on theme
   
    return (
        <div className={`flex justify-between m-auto shadow-md p-3 ${navbarBgColor} w-full`}>
            <div className=' flex gap-4 justify-center items-center'>
                <div className=' visible md:hidden lg:hidden'>

                    <Sheet>

                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg></SheetTrigger>
                        <SheetContent side={"left"} className={`${navbarBgColor}  `} >
                            <Image alt='logo' src={"/images/logo.png"} height={100} width={200}></Image>
                            <SheetHeader className=' w-full'>
                                <SheetTitle className=' underline underline-offset-4  decoration-[3px] text-[26px] mb-10' >Admin Pannel</SheetTitle>
                                <SheetDescription className=' w-full'>
                                   <div>
                                   <div className=' flex flex-col w-full '>
                                      <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]'>
                                        <LayoutDashboard/>
                                        Dashboard
                                        </div>
                                        <div className=' hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]'>
                                        <SquarePlus/>
                                         New Job
                                        </div>
                                        <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]'>
                                        <LayoutList/>
                                         Job list
                                        </div>
                                        <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]'>
                                        <ScanSearch/>
                                         View Resume
                                        </div>
                                        <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]'>
                                        <Contact2Icon/>
                                         Contact list
                                        </div>
                                      
                                    </div>
                                     <div>
                                      setting
                                     </div>
                                   </div>
                                </SheetDescription>
                              
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
                <Image className=' cursor-pointer' onClick={() => {
                    router.push("/")
                }} alt='logo' src={"/images/logo.png"} height={100} width={100} /></div>

            <div className=' flex  gap-[6px]'>

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 outline-none" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] outline-none rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className=' outline-none'>
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default AdminNavbar


