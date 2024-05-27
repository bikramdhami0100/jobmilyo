import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import NextSessionProvider from "./Provider";
import { getServerSession } from "next-auth";
import Footer from "./(users)/user/components/Footer";
import { MyProviders } from "../Redux/Provider";


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
      <body className={lora.className} id="defaultHome" >
          <MyProviders>

        
        <NextSessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            
            disableTransitionOnChange
          >     <div className=" fixed  z-30 top-0">
               <SplashScreen/> 
            </div>
            <div>

            
                {children}

            </div>

          </ThemeProvider>
        </NextSessionProvider>
        </MyProviders>
      </body>
    </html>
  );
}
