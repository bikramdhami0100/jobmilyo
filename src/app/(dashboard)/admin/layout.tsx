import type { Metadata } from "next";

import { Lora } from "next/font/google";
import "../../globals.css";

import { getServerSession } from "next-auth";


const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job मिल्यो Admin",
  description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
   <>

    <div className='flex flex-row  justify-between w-full h-full  '>
        <div className="">
         sidbar
        </div>
        <div className='w-'>
        
        {children}
       
        </div>
  
  
  </div>
  
   </>
 );
}
