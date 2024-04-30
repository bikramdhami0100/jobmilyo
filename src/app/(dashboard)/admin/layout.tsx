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

    <div className=' grid grid-cols-4'>
        <div>
         sidbar
        </div>
        <div className=' col-span-3'>
        
        {children}
       
        </div>
  
  
  </div>
  
   </>
 );
}
