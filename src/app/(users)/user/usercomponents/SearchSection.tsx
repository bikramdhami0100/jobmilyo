"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useDispatch, useSelector } from 'react-redux'
import { SearchHomeJobs } from '../../../../Redux/Slice'

function SearchSection({search,setSearch}:any) {
    const datas = [
        {
            category: "web development",
            image: "https://cdn-icons-png.flaticon.com/128/1055/1055687.png",
            location: "Kathmandu, Bagmati",
            salary: "$200-$600",
            working_hour: "Full-time",
            company: "Softee Tech Pvt. Ltd."
        },
        {
            category: "software development",
            image: "https://cdn-icons-png.flaticon.com/128/3064/3064197.png",
            location: "Pokhara, Gandaki",
            salary: "$250-$700",
            working_hour: "Part-time",
            company: "WNTIC Pvt. Ltd."
        },
        {
            category: "graphic design",
            image: "https://cdn-icons-png.flaticon.com/128/1904/1904425.png",
            location: "Biratnagar, Province No. 1",
            salary: "$150-$500",
            working_hour: "Freelance",
            company: "GIB (Global IT Business)"
        },
        {
            category: "digital marketing",
            image: "https://cdn-icons-png.flaticon.com/128/1904/1904427.png",
            location: "Lalitpur, Bagmati",
            salary: "$180-$550",
            working_hour: "Full-time",
            company: "Softee Tech Pvt. Ltd."
        },
        {
            category: "network administration",
            image: "https://cdn-icons-png.flaticon.com/128/2885/2885449.png",
            location: "Chitwan, Bagmati",
            salary: "$300-$800",
            working_hour: "Full-time",
            company: "WNTIC Pvt. Ltd."
        },
        {
            category: "UI/UX design",
            image: "https://cdn-icons-png.flaticon.com/128/1087/1087525.png",
            location: "Nepalgunj, Lumbini",
            salary: "$200-$600",
            working_hour: "Part-time",
            company: "GIB (Global IT Business)"
        },
        {
            category: "project management",
            image: "https://cdn-icons-png.flaticon.com/128/3172/3172991.png",
            location: "Dharan, Province No. 1",
            salary: "$350-$900",
            working_hour: "Full-time",
            company: "Softee Tech Pvt. Ltd."
        },
        {
            category: "IT support",
            image: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
            location: "Butwal, Lumbini",
            salary: "$150-$400",
            working_hour: "Part-time",
            company: "WNTIC Pvt. Ltd."
        },
        {
            category: "data analysis",
            image: "https://cdn-icons-png.flaticon.com/128/2707/2707933.png",
            location: "Birgunj, Province No. 2",
            salary: "$250-$650",
            working_hour: "Full-time",
            company: "Data Insights Nepal"
        },
        {
            category: "cyber security",
            image: "https://cdn-icons-png.flaticon.com/128/2547/2547558.png",
            location: "Dhangadhi, Sudurpashchim",
            salary: "$300-$700",
            working_hour: "Full-time",
            company: "SecureNet Pvt. Ltd."
        },
        {
            category: "cloud computing",
            image: "https://cdn-icons-png.flaticon.com/128/3079/3079124.png",
            location: "Hetauda, Bagmati",
            salary: "$280-$750",
            working_hour: "Part-time",
            company: "Cloud Nepal"
        },
        {
            category: "mobile app development",
            image: "https://cdn-icons-png.flaticon.com/128/2721/2721224.png",
            location: "Bharatpur, Bagmati",
            salary: "$300-$800",
            working_hour: "Full-time",
            company: "Mobile Innovations Pvt. Ltd."
        },
        {
            category: "content writing",
            image: "https://cdn-icons-png.flaticon.com/128/2460/2460831.png",
            location: "Janakpur, Province No. 2",
            salary: "$100-$400",
            working_hour: "Freelance",
            company: "Creative Writers Nepal"
        },
        {
            category: "system administration",
            image: "https://cdn-icons-png.flaticon.com/128/2877/2877448.png",
            location: "Gorkha, Gandaki",
            salary: "$250-$700",
            working_hour: "Full-time",
            company: "AdminTech Pvt. Ltd."
        },
        {
            category: "database management",
            image: "https://cdn-icons-png.flaticon.com/128/3039/3039419.png",
            location: "Tansen, Lumbini",
            salary: "$300-$750",
            working_hour: "Full-time",
            company: "DataBase Solutions"
        }
    ];

    const SearchItems = ["Select Field", ...Array.from(new Set(datas.map(data => data.category)))];
    const CompanyItems = ["Select Company", ...Array.from(new Set(datas.map(data => data.company)))];
    // const LocationItems = ["Select Location", ...(datas.map(data => data.location.split(', ')[0]))];



    const { theme } = useTheme();
    const dispatch = useDispatch();

    // const SearchItems = ["Select Field", ...new Set(datas.map(data => data.category))];
    const HandleMyFun = (e: any) => {
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value })

    };
    // const SearchItems=["Select Field","Web Technology","Data Science","App Development"]
    return (
        <div>
            <div className={`${theme=="light"?"bg-[#e2e3e5]":""} flex flex-row w-[96%] shadow-md border rounded-md p-10 m-auto mt-10`} >
                <div className='  flex gap-2 flex-wrap justify-evenly items-center w-full'>
                    <div className=' w-[200px]'>
                        <label htmlFor="interestedCategory"></label>
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="SelectItem" id="" onChange={HandleMyFun}>

                            {
                                SearchItems.map((item, index) => {

                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>


                    </div>
                    <Input name='Location' value={search.Location} placeholder='Location' width={200} className={`w-[200px] ${theme=="light"?" bg-white":""}`} onChange={HandleMyFun}  />
                    <div className=' w-[200px]'>
                        <label htmlFor="interestedCategory"></label>
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="PCompany" id="" onChange={HandleMyFun}>

                            {
                                CompanyItems.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>


                    </div>
                    <Button onClick={() => {
                        
                        // dispatch(SearchHomeJobs(JSON.stringify(search)));
                    }} className='w-[200px] bg-green-600 flex gap-2'><Search /> Search</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
