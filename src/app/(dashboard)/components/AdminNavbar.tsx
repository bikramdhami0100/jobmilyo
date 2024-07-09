
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, Contact2Icon, FacebookIcon, GithubIcon, ImageIcon, LayoutDashboard, LayoutList, LogOut, LogOutIcon, LucideWrench, MessagesSquare, Moon, ScanSearch, Search, Settings, SettingsIcon, SquarePlus, Sun } from "lucide-react"
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


import { signOut, useSession } from 'next-auth/react'
import { IconEyeSearch } from '@tabler/icons-react'


function AdminNavbar() {

    const AdminMenu = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: LayoutDashboard
        },
        {
            name: "New Job",
            path: "/admin/newjob",
            icon: SquarePlus
        },
        {
            name: "Job List",
            path: "/admin/joblist",
            icon: LayoutList
        },
        {
            name: "View Resume",
            path: "/admin/viewresume",
            icon: Search
        }
        ,
        {
            name: "Contact List",
            path: "/admin/contactlist",
            icon: Contact2Icon
        }
    ]


    const router = useRouter();

    const { setTheme, theme } = useTheme();

    const navbarBgColor = theme === 'light' ? "bg-[#1983d1] text-black  " : 'bg-[rgb(17,24,39)]'; // Set background color based on theme

    return (
        <div className={` flex justify-between m-auto  shadow-md p-3 ${navbarBgColor} w-full`}>
            <div className=' flex gap-4 justify-center items-center'>
                <div className=' visible md:hidden lg:hidden'>

                    <Sheet>

                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg></SheetTrigger>
                        <SheetContent side={"left"} className={`${navbarBgColor}  `} >
                            <Image alt='logo' src={"/images/logo.png"} height={100} width={200}></Image>
                            <SheetHeader className=' w-full'>
                                <SheetTitle className=' underline underline-offset-4  decoration-[3px] text-[26px] mb-10' >Admin Pannel</SheetTitle>
                                <SheetDescription className=' w-full'>
                                    <div className=' flex flex-col justify-between gap items-start gap-[200px] '>
                                        <div className=' flex flex-col w-full '>
                                            <SheetClose>
                                            {
                                                AdminMenu.map((item,index)=>{
                                                    return (
                                                        <div className={`hover:bg-rose-700 ${theme=="light"?"text-black":""} rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]`} onClick={() => {
                                                            router.push(item.path)
                                                        }}>
                                                           <item.icon/>
                                                             {item.name}
                                                        </div>
                                                    )
                                                })
                                            }

                                            </SheetClose>
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


