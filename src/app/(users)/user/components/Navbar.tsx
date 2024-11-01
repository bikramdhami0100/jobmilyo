"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookMarked, BookMarkedIcon, Bookmark, BriefcaseBusiness, BriefcaseBusinessIcon, Group, Home, LogOut, MessageCircle, MessagesSquare, Moon, PersonStanding, Send, Settings, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname, useRouter } from 'next/navigation'
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
import { useSelector } from 'react-redux'
import { PersonIcon } from '@radix-ui/react-icons'
import {  IconNotes } from '@tabler/icons-react'
import CheckUserType from '@/app/components/CheckUserType'

function Navbar() {
    const router = useRouter();
    const path=usePathname()
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
   console.log(CheckUserType)
    useEffect(() => {
        setMounted(true);
    }, []);
//  console.log(theme)
    const navbarBgColor = theme === 'light' ? 'bg-gradient-to-r from-[rgb(245,238,181)] to-[rgb(183,184,177),rgb(220,224,227)]' : 'bg-[rgb(17,24,39)]'; // Set background color based on theme

    const NavMenu2 = [
        {
            name: "Home",
            path: "/user",
            // icon: Home
        },
        {
            name: "About",
            path: "/user/About",
            // icon: Group
        },
        {
            name: "Jobs",
            path: "/user/Jobs",
            // icon: PersonStanding
        },
        {
            name: "Contact us",
            path: "/user/Contact",
            // icon: MessageCircle
        },
        {
            name: "Post a job",
            path: "/user/post",
            // icon: Send
        },
       
    ]

    const ChatWithUs = () => {
        alert("implement in major project !!!")
    }
    const selector = useSelector((usertoken: any) => {
        
        return usertoken?.signupinfo?.validUserToken
    })
    // console.log(selector);
    const [usersignup, setusersignup] = useState(false);
    const [validUser, setValidUser] = useState<any>();
    const [token, settoken] = useState<any>();
    // const session = useSession();


    const checkuserVerify = async () => {
        const data = await fetch("/api/checkvaliduser/", {
            method: "get",

        })

        if (data.ok) {
            const result = await data?.json()
       
            if (result?.user) {
             
                setValidUser(result.user)
                settoken(result.token);
                setusersignup(true);

            }

        }
    }
    useEffect(() => {

        checkuserVerify();
    }, [selector]);


    const HandleLogOut = async () => {
        // console.log("log out c")
        const data = await fetch(`/api/login/logout?token=${token}`, {
            method: "get",

        })

        if (data.ok) {
            const result = await data.json()
            if (result) {
                // toast({
                //     description: result?.message,
                //     className:"text-black border-green-600 bg-white rounded-md"
                // })
                setValidUser("");
                settoken("");
                setusersignup(false);
                router.push("/user/login/")

            }

        }
    }
    const pathHandler=(path:any)=>{
        router.push(path)
    }
        // If the theme is not mounted yet, do not render the navbar
        if (!mounted) return null;
//  console.log(validUser)
    return (
        <div className={`flex w-full h-[70px]  justify-between m-auto shadow-md items-center p-3 ${navbarBgColor} `}>

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
                                            NavMenu2.map((item, index) => {
                                                return (<div className=' flex font-bold  m-2 text-2xl flex-row' key={index}>
                                                    <SheetClose> <h1 className={` cursor-pointer hover:text-blue-600 hover:underline hover:transition-shadow ${path==item.path?"text-blue-600 underline underline-offset-2":""}`} onClick={() => {
                                                       pathHandler(item.path);
                                                       
                                                    }}>{item.name == "Post a job" ? (<p className=' bg-[#b0dac1] rounded-full p-2 underline'>{item.name}</p>) : item.name}</h1></SheetClose>
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

            <div className={` flex hidden  md:flex font-bold  text-xl lg:flex  gap-10 `}>

                {
                    NavMenu2.map((item:any, index:any) => {
                        return (<div className=' flex flex-row justify-center items-center  gap-10' key={index}>
                            <span className={` cursor-pointer hover:text-blue-600 hover:underline  ${path==item.path?"text-blue-600 underline underline-offset-2":""}`}  onClick={() => {
                                router.push(item.path)
                            }}>{item.name == "Post a job" ? (<span className={` ${theme == "light" ? "bg-[#b0dac1]" : ""}  flex  items-center justify-center text-center rounded-full p-2 underline`}>{item.name}</span>) : item.name}</span>
                        </div>)
                    })
                }</div>
            <div className=' flex  gap-[6px]'>

              


                {
                    usersignup ?
                        <div>
                            <DropdownMenu >
                                <DropdownMenuTrigger className=' outline-none' ><div>
                                {
                                                validUser?.color.startsWith("#") ? (
                                                    <div className='w-[40px] flex justify-center items-center -mb-4 relative group'>
                                                        <div style={{ backgroundColor: validUser?.color }} className='flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                                                            <div className='text-center'>{validUser.fullName.charAt(0).toUpperCase()}</div>
                                                        </div>
                                                     
                                                    </div>
                                                ) : (
                                                    <div className='relative group w-[40px] h-[35px] rounded-full  border '>
                                                        <Image src={validUser?.color} alt={"profile image"} width={100} height={100} className=' object-fill h-[40px] w-[40px] rounded-[20px] ' />
                                                    
                                                      
                                                    </div>
                                                )
                                            }
                                </div></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className=' flex  gap-1 text-sm' onClick={() => {
                                        router.push("/user/profile")
                                    }}><PersonIcon  className=' size-[20px] cursor-pointer' />Profile</DropdownMenuItem>
                                    <DropdownMenuItem className=' flex  gap-1 text-sm' onClick={() => {
                                        router.push("/user/apply")
                                    }}><BriefcaseBusinessIcon className=' size-[20px] cursor-pointer' />apply list</DropdownMenuItem>
                                    <DropdownMenuItem
                                      className=' text-sm flex gap-1 cursor-pointer'
                                      onClick={()=>{
                                        router.push("/user/setting")
                                      }}
                                    ><Settings size={20}/> Setting</DropdownMenuItem>
                                    <DropdownMenuItem className=' cursor-pointer flex gap-1' onClick={() => {
                                       router.push(`/user/userpostjobs/`)
                                    }} ><IconNotes/> post list</DropdownMenuItem>
                                    <DropdownMenuItem className=' cursor-pointer flex gap-1' onClick={() => {
                                        HandleLogOut();
                                    }} ><LogOut  size={20} />log out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div> : <div className=' flex  gap-1'>
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

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar
