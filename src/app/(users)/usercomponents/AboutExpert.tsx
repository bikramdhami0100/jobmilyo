import Image from 'next/image'
import React from 'react'

function AboutExpert() {
    return (
        <div>
            <div className=' flex flex-wrap flex-col  md:flex-row lg:flex-row '>
                <div className=' flex  flex-col border shadow-md p-2 m-auto w-full md:w-[40%] lg:w-[40%]'>
                    <p>Our job portal website offers a comprehensive solution for both job seekers and employers alike. With a user-friendly interface and advanced search functionality, users can effortlessly navigate through job listings and find the perfect opportunity or candidate. Our platform prioritizes security and privacy, ensuring a safe environment for job posting and application management. Additionally, our personalized recommendation system and interactive features enhance user engagement and streamline the recruitment process. Whether you're a job seeker looking for your next career move or an employer seeking top talent, our job portal provides the tools and resources needed to succeed in today's competitive job market.</p>
                    <h1>Our Job Portal Website</h1>
                    <ol >
                        <li>
                            User-Friendly Interface
                        </li>
                        <li>
                        Advanced Search Functionality
                        </li>
                        <li>Responsive Design</li>
                        <li>Secure Job Posting</li>
                        <li>Personalized Recommendations</li>
                        <li>Interactive Features</li>
                        <li>Comprehensive Candidate Profiles</li>
                        <li>Analytics and Insights</li>
                    </ol>
                </div>
                <div className=''>
                  <Image src={"/images/herothree.jpg"}  alt='one image' width={400} height={400} className=' '/>
                </div>
            </div>
        </div>
    )
}

export default AboutExpert
