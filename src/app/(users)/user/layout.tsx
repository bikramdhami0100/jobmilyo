
import Footer from "@/app/(users)/user/components/Footer";
import Navbar from "@/app/(users)/user/components/Navbar";
import { Toaster } from "@/components/ui/toaster";



export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
   <>
      <div  id="userHome"  >
         <div>
         <div className=" sm:sticky sm:z-20 w-full top-0 sticky z-20">
         <Navbar/>
         <Toaster />
  
         </div>
          <div className={`z-0 `} >
          {children}
          </div>
          <div >
          <Footer/>
          </div>
         </div>
      </div>
      </>
  );
}
