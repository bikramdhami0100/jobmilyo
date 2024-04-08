import type { Metadata } from "next";
import "../../globals.css";
import { Lora } from "next/font/google";



const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job मिल्यो",
  description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={lora.className}  >

             {children}
              
           
      </body>
    </html>
  );
}
