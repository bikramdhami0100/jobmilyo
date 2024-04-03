import React from 'react'
import TreandingList from './TreandingList'

export type DataType = {
    category: string;
    image: string;
    location: string;
    salary: string;
    working_hour: string;
};

function TreandingJob() {
    
    const datas: DataType[] = [
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        },
        {
            category: "web development",
            image: "/images/treandingboximg.png",
            location: "MNR, Kanchanpur",
            salary: "$100-$500",
            working_hour: "Part-time",
        }
    ];

    return (
        <div className=' shadow-md  border w-[99%] m-auto p-4 mt-16'>

            <TreandingList data={datas}/>
        </div>
    );
}

export default TreandingJob;
