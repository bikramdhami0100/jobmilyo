
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, Contact2Icon, FacebookIcon, GithubIcon, ImageIcon, LayoutDashboard, LayoutList, LogOut, LogOutIcon, LucideWrench, MessagesSquare, Moon, ScanSearch, Search, Settings, SettingsIcon, SquarePlus, Sun, ViewIcon } from "lucide-react"
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




import { signOut, useSession } from 'next-auth/react'


function AdminSideBar() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const { setTheme, theme } = useTheme();
    const AdminSideMenu = [
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

    // const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]';
       const navbarBgColor = theme === 'light' ? 'bg-[#1983d1]' : 'bg-[rgb(17,24,39)]';
          // If the theme is not mounted yet, do not render the navbar
          if (!mounted) return null;
    return (
        <div className={`${navbarBgColor} min-h-screen w-full lg:visible md:visible`}>

            <div className=' flex flex-col justify-between items-start gap-[200px] p-2 '>

                <div className=' flex flex-col w-full '>
                    <div className=' text-center font-extrabold text-3xl mb-[100px]'>
                        <h1 className=' underline underline-offset-2'>Admin Panel</h1>
                    </div>

                   {
                    AdminSideMenu.map((item,index)=>{
                        return(
                            <div className='hover:bg-rose-700 rounded-md cursor-pointer  w-full p-2 flex gap-4 font-extrabold text-[20px]' onClick={() => {
                                router.push(item.path)
                            }} >
                                <item.icon />
                                 {item.name}
                            </div>
                        )
                    })
                   }
            

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
