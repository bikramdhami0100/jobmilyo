"use client"
import React, { useEffect, useState } from 'react';
import TreandingList from './TreandingList';
import { useSelector } from 'react-redux';
import SearchSection from './SearchSection';
import axios from "axios"
export type DataType = {
    category: string;
    image: string;
    location: string;
    salary: string;
    working_hour: string;
    company: string
};

function TreandingJob() {
     const [treandingJobs,setTreandingJobs]=useState<any>()
    const [search, setSearch] = useState<any>({
        PCompany: "",
        Location: "",
        SelectItem: "",
    });
    const TreandingHomeJobs = async () => {
        const received = (await axios.get("/api/trendinghome")).data;
        setTreandingJobs(received.data)
        //   if(received.state==200){
        //     setJobs(received.data)
        //   }
    }
    // console.log(treandingJobs)
    // 
    useEffect(() => {
        TreandingHomeJobs()
    }, [])
   

    const filterData = treandingJobs?.filter((item:any) => {
        if (search.SelectItem == "Select Field" || search.SelectItem == "Select Company") {
            search.SelectItem = ""
            return item
        }
        if (search.PCompany == "Select Company" || search.SelectItem == "Select Company") {
            search.PCompany = ""
            return item
        }
        if (search) {

            const matchesCategory = search.SelectItem ? item?.category?.toLowerCase().includes(search.SelectItem.toLowerCase()) : true;
            const matchesCompany = search.PCompany ? item?.company?.toLowerCase().includes(search.PCompany.toLowerCase()) : true;
            const matchesLocation = search.Location ? item?.address?.toLowerCase().includes(search.Location.toLowerCase()) : true;
            return matchesCategory && matchesCompany && matchesLocation;
        } else {
            return item
        }


    });
    
  useEffect(()=>{
 
  },[]);
    return (
        <div>
            <SearchSection search={search} setSearch={setSearch} />
            <div className='shadow-md border w-full h-full mt-10'>
                <div className='relative  py-10 flex flex-wrap justify-center items-center'>
                    <h1 className=' mt-5  underline decoration-blue-600 absolute top-0 font-extrabold text-4xl text-center  mb-20'>
                        Trending Jobs in <span className='text-blue-600'>Job</span> <span className='text-red-600'>मिल्यो ?</span>
                    </h1>
                    <div className='my-10'>
                        <TreandingList data={filterData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreandingJob;
