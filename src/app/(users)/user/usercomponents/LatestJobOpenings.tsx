import { Button } from '@/components/ui/button';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { IconTimeDuration60 } from '@tabler/icons-react';
import { Calendar, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function LatestJobOpenings() {
    const LatestJobOpen = [
        {
            name: "Raman Khadka",
            category: "Database Engineer",
            location: "Kathmandu",
            time: "26 min ago",
            salary: "Rs.50-55k",
            interested_employ_type: "Part time",
            details: "",
            apply: "https://example.com/apply/raman-khadka",
            rating: 4.8,
            remote: true
        },
        {
            name: "Sita Thapa",
            category: "Software Developer",
            location: "Pokhara",
            time: "1 hour ago",
            salary: "Rs.60-70k",
            interested_employ_type: "Full time",
            details: "Experience with JavaScript and Python required.",
            apply: "https://example.com/apply/sita-thapa",
            rating: 4.5,
            remote: false
        },
        {
            name: "Bikash Shrestha",
            category: "System Administrator",
            location: "Lalitpur",
            time: "3 hours ago",
            salary: "Rs.40-50k",
            interested_employ_type: "Full time",
            details: "Knowledge of Linux and Windows servers.",
            apply: "https://example.com/apply/bikash-shrestha",
            rating: 4.7,
            remote: true
        },
        {
            name: "Aarati Rai",
            category: "Network Engineer",
            location: "Biratnagar",
            time: "5 hours ago",
            salary: "Rs.45-55k",
            interested_employ_type: "Contract",
            details: "CCNA certification preferred.",
            apply: "https://example.com/apply/aarati-rai",
            rating: 4.6,
            remote: false
        },
        {
            name: "Prabin Karki",
            category: "Data Scientist",
            location: "Chitwan",
            time: "8 hours ago",
            salary: "Rs.80-90k",
            interested_employ_type: "Full time",
            details: "Experience with machine learning and data analysis.",
            apply: "https://example.com/apply/prabin-karki",
            rating: 4.9,
            remote: true
        },
        {
            name: "Sarita Gurung",
            category: "Web Designer",
            location: "Butwal",
            time: "1 day ago",
            salary: "Rs.30-40k",
            interested_employ_type: "Part time",
            details: "Proficiency in HTML, CSS, and Adobe Suite.",
            apply: "https://example.com/apply/sarita-gurung",
            rating: 4.3,
            remote: false
        },
        {
            name: "Kamal Adhikari",
            category: "Mobile App Developer",
            location: "Dharan",
            time: "2 days ago",
            salary: "Rs.70-80k",
            interested_employ_type: "Full time",
            details: "Experience with Android and iOS development.",
            apply: "https://example.com/apply/kamal-adhikari",
            rating: 4.7,
            remote: true
        }
    ];

    return (
        <div>
            <div><h1 className='text-center text-4xl underline font-bold'>Latest Job Openings</h1></div>
            <div className='flex flex-wrap gap-10 justify-center items-center my-10 w-[100%] m-auto'>
                {
                    LatestJobOpen.map((item, index) => {
                        return (
                            <div key={index} className='flex relative  flex-row  items-center justify-between gap-2 w-full h-full border p-4'>
                                <div className=' w-full flex flex-col  gap-2'>
                                    <div className='flex gap-2'>
                                        <h1 className='text-xl font-bold '>{item.name}</h1>
                                        <span className='flex items-center border cursor-pointer rounded-lg p-1 text-sm bg-yellow-100  ml-1 text-yellow-400'>{item.rating} <Star className='mr-1' /></span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <h1 className='text-lg font-semibold'>{item.category}</h1>
                                        <span className=' bg-green-100 text-green-600 p-1 border rounded-lg text-sm'>{item.remote ? 'Remote' : 'On-site'}</span>
                                    </div>
                                    {/*  location and book mark */}
                                    <div className='  flex justify-between w-full items-center gap-5'>
                                        <span className='flex items-center'><MapPin className='mr-1' /> {item.location}</span>
                                        <span className='flex items-center'><IconTimeDuration60 className='mr-1' /> {item.interested_employ_type}</span>
                                        <span>{item.salary}</span>
                                        <span className='flex items-center'><Calendar className='mr-1' />{item.time}</span>

                                    </div>
                                </div>
                                <div className='flex w-[30vw] flex-wrap  justify-center   items-center gap-2 '>
                                    <BookmarkIcon className='  size-10 w-[50px]' />
                                    <Button className=' size-10 w-[100px]'>Details</Button>
                                    <Button className=' size-10 w-[100px]'>
                                    <Link href={item.apply} target="_blank" rel="noopener noreferrer">Apply</Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='cursor-pointer h-[2px] flex justify-center items-center w-full mb-10 bg-gray-400'>
                <div className='w-[25%] h-[30px] bg-gray-400 rounded-full text-center'>
                    <div className='text-sm text-center p-1'>Show more &darr;</div>
                </div>
            </div>
        </div>
    );
}

export default LatestJobOpenings;
