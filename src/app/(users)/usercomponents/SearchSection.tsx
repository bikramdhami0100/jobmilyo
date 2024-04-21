"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useDispatch, useSelector } from 'react-redux'
import { SearchHomeJobs } from '@/app/Redux/Slice'

function SearchSection() {
    interface SearchInterface{
        PCompany:string,
        Location:string,
        SelectItem:string
    }
    const sel=useSelector((state:any)=>{
        const data=state?.signupinfo.SearchContent.toString();
     
        return data;
        });

 
    const {theme} = useTheme();
    const dispatch=useDispatch();
    const [search,setSearch]=useState({
        PCompany:"",
        Location:"",
        SelectItem:"",
    });
   
    const HandleMyFun=(e:any)=>{
         const {name,value}=e.target;
       setSearch({...search,[name]:value})
       
    };
    const SearchItems=["Select Field","Web Technology","Data Science","App Development"]
    return (
        <div>
            <div className=' flex flex-row w-[96%] shadow-md border rounded-md p-10 m-auto mt-10'>
                <div className='  flex gap-2 flex-wrap justify-evenly items-center w-full'>
                    <Input name='PCompany' value={search.PCompany} placeholder='Preferred Company' width={200} className='w-[200px]' onChange={HandleMyFun} />
                    <Input name='Location' value={search.Location} placeholder='Location' width={200} className='w-[200px]'  onChange={HandleMyFun}/> 
                    <div className=' w-[200px]'>
                        <label htmlFor="interestedCategory"></label>
                        <select   className={`flex ${theme== "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="SelectItem"  id="" onChange={HandleMyFun}>

                            {
                                SearchItems.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>
                   

                    </div>
                    <Button onClick={()=>{
                        dispatch(SearchHomeJobs(JSON.stringify(search)));
                    }} className='w-[200px] bg-blue-600 flex gap-2'><Search /> Search</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
