import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Lora } from "next/font/google";
import "./globals.css";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job मिल्यो",
  description: "Job मिल्यो website is one of the popular website for job seeker and it's developed by K_DBMS Team of bsc.CSIT of farwestern University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={lora.className}>
      
      
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SplashScreen />
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
