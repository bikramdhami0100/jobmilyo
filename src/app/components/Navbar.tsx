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

function Navbar() {
    const session=useSession();
    
    console.log(session);
    const router=useRouter();
    if (session.status=="authenticated") {
        useEffect(() => {
            // Function to set a cookie
            const setCookie = (name:string, value:any, days:number) => {
              const expires = new Date(Date.now() + days * 864e5).toUTCString();
              document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
            };
        
            // Call setCookie function to set your desired cookie
            setCookie('user', session.data.user?.email, 1); // 30 days expiry, adjust as needed
          }, []); 
          

    }
     if (session.status=='unauthenticated') {
        useEffect(() => {
            // Function to set a cookie
            const showCookie = (name:string, value:any, days:number) => {
              const expires = new Date(Date.now() + days * 864e5).toUTCString();
              document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
            };
        
            // Call setCookie function to set your desired cookie
            showCookie('user', "", 1); // 30 days expiry, adjust as needed
          }, []); 
     }
    const { setTheme,theme } = useTheme();
    
    const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-gray-900'; // Set background color based on theme
    const NavMenu = ["Home", "About", "Jobs", "Contact","Documentation"]
    const BookMarkMyWebsite=(title:any, url:any)=>{
         alert("bookMark is not possible !!")
        // if (window.sidebar && window.sidebar.addPanel) { // Firefox
        //     window.sidebar.addPanel(title, url, '');
        // } else if (window.external && ('AddFavorite' in window.external)) { // Internet Explorer
        //     window.external.AddFavorite(url, title);
        // } else if (window.opera && window.print) { // Opera
        //     var elem = document.createElement('a');
        //     elem.setAttribute('href', url);
        //     elem.setAttribute('title', title);
        //     elem.setAttribute('rel', 'sidebar');
        //     elem.click();
        // } else { // Other browsers - prompt user to press Ctrl+D to bookmark
        //     alert("BookMark is not possible due to security");
        // }
    }
    const ChatWithUs=()=>{
         alert("implement in major project !!!")
    }
    return (
        <div className={`flex justify-between m-auto shadow-md p-3 ${navbarBgColor} `}>
            <div className=' flex gap-1 justify-center items-center'>
            <div className=' visible md:hidden lg:hidden'>

                <Sheet>
                    
                    <SheetTrigger>  <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg></SheetTrigger>
                    <SheetContent side={"left"} className={`${navbarBgColor}  `}>
                    <Image  alt='logo' src={"/images/logo.png"} height={100}  width={200}></Image>
                        <SheetHeader>
                            <SheetTitle >Menu</SheetTitle>
                            <SheetDescription>
                              <div>
                                {
                                    NavMenu.map((item, index) => {
                                        return (<div className=' flex flex-row' key={index}>
                                           <SheetClose> <h1 className=' cursor-pointer hover:text-blue-600 hover:underline hover:transition-shadow'  onClick={()=>{
                                            router.push(`/${item}`)
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
            <Image className=' cursor-pointer' onClick={()=>{
                router.push("/")
            }} alt='logo' src={"/images/logo.png"} height={100} width={100} /></div>

            <div className={` flex hidden  md:flex md:gap-2  lg:flex  lg:gap-3`}>

                {
                    NavMenu.map((item, index) => {
                        return (<div className=' flex flex-row ' key={index}>
                            <h1 onClick={()=>{
                                router.push(`/${item}`)
                            }} className=' cursor-pointer hover:text-blue-600 hover:underline hover:transition-shadow' >{item}</h1>
                        </div>)
                    })
                }</div>
            <div className=' flex  gap-[6px]'>

            <MessagesSquare  className=' self-center  h-[40px] '
            onClick={()=>{
                ChatWithUs();
              }} />
              <Bookmark className=' self-center  h-[40px] ' onClick={()=>{
                BookMarkMyWebsite("jobmilyo","http://localhost:3000");
              }}/>
           
           {
              session.status=="authenticated" ? <div>
<DropdownMenu >
  <DropdownMenuTrigger className=' outline-none' ><div>
     <Image src={`${session.data.user?.image}`} alt='user' height={30} width={30} className=' w-[35px] w-[35px]  rounded-full '></Image>
    </div></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={()=>{
        router.push("/profile")
    }}>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{
         signOut()
    }} ><LogOut/>log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

              </div>:<div className=' flex  gap-1'>
              <Button className='bg-blue-600' onClick={()=>{
                    router.push("/login")
                }}>Log in</Button>
                <Button className=' bg-blue-600' onClick={()=>{
                    router.push("/signup")
                }}>Sign up</Button>
              </div>
           }
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
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
