// import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import SideBar from "./admincomponents/SideBar";
// import "../../globals.css";

const lora = Lora({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Job मिल्यो",
//   description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
// };

export default async function AdminLayout({children}:any) {


  return (
    
     <body>
        <div>
            <div><SideBar/></div>
            <div>{children}</div>
        </div>
       

     </body>
        
      
  
  );
}
