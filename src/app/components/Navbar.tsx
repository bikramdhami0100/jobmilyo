"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navbar() {
    const { setTheme,theme } = useTheme();
     const router=useRouter();
    const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-gray-900'; // Set background color based on theme
    const NavMenu = ["Home", "About", "Jobs", "Contact"]
    return (
        <div className={`flex justify-between m-auto shadow-md p-3 ${navbarBgColor}`}>
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
                                            <Link href={`/${item}`} >{item}</Link>
                                        </div>)
                                    })
                                }
                              </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
            <Image className='' alt='logo' src={"/images/logo.png"} height={100} width={100} /></div>

            <div className={` flex hidden  md:flex md:gap-2  lg:flex  lg:gap-3`}>

                {
                    NavMenu.map((item, index) => {
                        return (<div className=' flex flex-row ' key={index}>
                            <Link href={`/${item}`} >{item}</Link>
                        </div>)
                    })
                }</div>
            <div className=' flex  gap-[6px]'>

                <Button onClick={()=>{
                    router.push("/login")
                }}>Log in</Button>
                <Button className=' bg-blue-600' onClick={()=>{
                    router.push("/signup")
                }}>Sign up</Button>
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
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar
