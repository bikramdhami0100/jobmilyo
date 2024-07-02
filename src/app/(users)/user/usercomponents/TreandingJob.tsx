"use client"
import React, { useState } from 'react';
import TreandingList from './TreandingList';
import { useSelector } from 'react-redux';
import SearchSection from './SearchSection';

export type DataType = {
    category: string;
    image: string;
    location: string;
    salary: string;
    working_hour: string;
    company: string
};

function TreandingJob() {
    const [search, setSearch] = useState<any>({
        PCompany: "",
        Location: "",
        SelectItem: "",
    });

    const datas: DataType[] = [
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

    const filterData = datas.filter((item) => {
        if (search.SelectItem == "Select Field" || search.SelectItem == "Select Company") {
            search.SelectItem = ""
            return item
        }
        if (search) {

            const matchesCategory = search.SelectItem ? item.category.toLowerCase().includes(search.SelectItem.toLowerCase()) : true;
            const matchesCompany = search.PCompany ? item.company.toLowerCase().includes(search.PCompany.toLowerCase()) : true;
            const matchesLocation = search.Location ? item.location.toLowerCase().includes(search.Location.toLowerCase()) : true;
            return matchesCategory && matchesCompany && matchesLocation;
        } else {
            return item
        }


    });

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
