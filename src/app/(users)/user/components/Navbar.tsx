"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, LogOut, MessagesSquare, Moon, Sun } from "lucide-react"
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
import { useSelector } from 'react-redux'

function Navbar() {
    const selector=useSelector((usertoken)=>{
        //  console.log(usertoken);
    })
    const [usersignup,setusersignup]=useState(false);
    const [validUser,setValidUser]=useState<any>();
    const session=useSession();
    const checkuserVerify=async()=>{
        const data=await fetch("/api/checkvaliduser/",{
            method:"get",
          
        })
        
        if (data.ok) {
        const result=await data.json()
        console.log(result);
            setValidUser(result)
            setusersignup(true);
            
        }
    }
    useEffect(()=>{

    checkuserVerify();
    },[]);

    const router = useRouter();
   
    const { setTheme, theme } = useTheme();

    const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]'; // Set background color based on theme
    const NavMenu = ["Home", "About", "Jobs", "Contact", "Documentation"]

    const ChatWithUs = () => {
        alert("implement in major project !!!")
    }
   
    return (
        <div className={`flex justify-between m-auto shadow-md p-3 ${navbarBgColor} `}>
            <div className=' flex gap-1 justify-center items-center'>
                <div className=' visible md:hidden lg:hidden'>

                    <Sheet>

                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg></SheetTrigger>
                        <SheetContent side={"left"} className={`${navbarBgColor}  `}>
                            <Image alt='logo' src={"/images/logo.png"} height={100} width={200}></Image>
                            <SheetHeader>
                                <SheetTitle >Menu</SheetTitle>
                                <SheetDescription>
                                    <div>
                                        {
                                            NavMenu.map((item, index) => {
                                                return (<div className=' flex flex-row' key={index}>
                                                    <SheetClose> <h1 className=' cursor-pointer hover:text-blue-600 hover:underline hover:transition-shadow' onClick={() => {
                                                        router.push(`/user/${item}`)
                                                    }}>{item}</h1></SheetClose>
                                                </div>)
                                            })
                                        }
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
                <Image className=' cursor-pointer' onClick={() => {
                    router.push("/user")
                }} alt='logo' src={"/images/logo.png"} height={100} width={100} /></div>

            <div className={` flex hidden  md:flex md:gap-2  lg:flex  lg:gap-3`}>

                {
                    NavMenu.map((item, index) => {
                        return (<div className=' flex flex-row ' key={index}>
                            <h1 onClick={() => {
                                router.push(`/user/${item}`)
                            }} className=' cursor-pointer hover:text-blue-600 hover:underline hover:transition-shadow' >{item}</h1>
                        </div>)
                    })
                }</div>
            <div className=' flex  gap-[6px]'>

                <MessagesSquare className=' self-center  h-[40px] '
                    onClick={() => {
                        ChatWithUs();
                    }} />


                {
                   usersignup?
                    <div>
                        <DropdownMenu >
                            <DropdownMenuTrigger className=' outline-none' ><div>
                                {/* {
                                     session.status=="authenticated"? <Image src={`${session.data.user?.image}`} alt='user' height={30} width={30} className='  w-[35px]  rounded-full '></Image>:<div>
                                       <div style={{backgroundColor:validUser?.user?.color}} className={`flex justify-center items-center h-[35px] text-center  w-[35px] rounded-full bg-blue-600 `}>
                                        <p>{validUser.user.fullName.charAt(0)}</p>
                                       </div>

                                     </div>
                                } */}

                            </div></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => {
                                    router.push("/user/profile")
                                }}>Profile</DropdownMenuItem>
                              
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => {
                                    signOut() || setValidUser("")
                                }} ><LogOut />log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>  : <div className=' flex  gap-1'>
                        <Button className='bg-blue-600' onClick={() => {
                            router.push("/user/login")
                        }}>Log in</Button>
                        <Button className=' bg-blue-600' onClick={() => {
                            router.push("/user/signup")
                        }}>Sign Up</Button>
                    </div>
                }
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

export default Navbar
