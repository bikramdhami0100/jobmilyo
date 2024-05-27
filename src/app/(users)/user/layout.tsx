import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Lora } from "next/font/google";
import "@/app/(users)/user/globals.css";

import Footer from "@/app/(users)/user/components/Footer";
import Navbar from "@/app/(users)/user/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";


const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job मिल्यो User",
  description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
};

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
   <>
      <div className={lora.className} id="userHome"  >
         <div>
         <div className=" sm:sticky sm:z-20 w-full top-0 sticky z-20">
         <Navbar/>
         <Toaster />
  
         </div>
          <div className="z-0" >
          {children}
          </div>
         <Footer/>
         </div>
      </div>
      </>
  );
}
