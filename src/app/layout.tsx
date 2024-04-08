import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import NextSessionProvider from "./Provider";
import { getServerSession } from "next-auth";
import Footer from "./components/Footer";


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

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={lora.className}  >

        <NextSessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            enableColorScheme
            
            disableTransitionOnChange
          >     <div className=" fixed  z-30 top-0">
               <SplashScreen/> 
            </div>
            <div>

              <div className=" fixed z-20 w-[100%] top-0 ">
                <Navbar />
              </div>
              <div className=" mt-[60px] m-auto">
                {children}
              </div>
              <div><Footer/></div>
            </div>

          </ThemeProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
