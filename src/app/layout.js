import { Inter } from "next/font/google";
// import { Suspense } from 'react';
import "./globals.css";
// import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });









export const metadata = {
  title: "saddam hossen ",
  description: "Front-End Developer and WordPress customizing expert From Bangladesh I am also proficient in working with React JS frameworks. creating websites and designing them is my passion",
  keywords:"Front-End Developer, WordPress, Bangladesh, React JS frameworks, Front-End, Developer, and WordPress, customizing, expert From Bangladesh, I am also, proficient in working, with React JS frameworks, creating websites, and designing them is my passion, saddam, hossen, saddan hossen,",
  robots:"noindex, nofollow",
  author:"Md Saddam Hossen",
  name:"google-site-verification",
  content:"CfH8nw_b0Com6bg2nOj3tBCkCRu0fcXjV8h0N2qpcUY",
  icons:{
    icon:[ "/favicon.ico?v=4"],
    apple:["/apple-touch-icon.png"],
    shortcut:["apple-touch-icon.png"]
  }
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
         <body className={`${inter.className} body`}>


    {children}




        </body>
    </html>
  );
}
