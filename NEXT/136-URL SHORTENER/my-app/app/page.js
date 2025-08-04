import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"],
});
export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center text-white ">
          <p className={` text-3xl font-bold ${poppins.className}`}>The best URL shortener in the market</p>
          <p className="px-56">We are the most straightforward URl Shortener in the World.Most of the URL wil track you or ask your details for login.we understand your needs and hence we have created trhis URl Shortener fot you.</p>
        <div className="flex gap-3 justify-start">
          <Link href="/shorten"><button className='bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 font-bold px-2 rounded-lg py-1'>Try Now</button></Link>
          <Link href="github"><button className='bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 font-bold px-2 rounded-lg py-1'>GitHub</button></Link>
        </div>
        </div>
        <div className=" relative flex justify-start">
          <Image alt="" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
