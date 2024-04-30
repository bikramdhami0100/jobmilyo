import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Lora } from "next/font/google";
import "@/app/(users)/user/globals.css";

import Footer from "@/app/(users)/user/components/Footer";
import Navbar from "@/app/(users)/user/components/Navbar";



const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job मिल्यो User",
  description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={lora.className} id="userHome"  >
         <div>
         <div className=" ">
         <Navbar/>
         </div>
         {children}
         <Footer/>
         </div>
      </body>
    </html>
  );
}
