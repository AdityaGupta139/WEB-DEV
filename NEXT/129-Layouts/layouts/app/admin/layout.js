import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Facebook - connect with friends and the world around you on Facebook.",
  description: "facebook is social networking service where users can post comments, share photographs, and links to news or other interesting content on the web, chat live, and watch short-form video.",
};

export default function RootLayout({ children }) {
  return (<>
   
        <span>Admin Navbar</span>
        {children}
      
  </>
   
  );
}
