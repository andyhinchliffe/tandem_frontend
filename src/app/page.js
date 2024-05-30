import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex flex-col items-center justify-center h-screen">
    <Image src="/TR_Logo.jpg" alt="logo" width={150} height={150} />
    <Link href="/submitjob">
    <button  className="mt-12 btn w-52 bg-[#8224e3] text-slate-100">Login</button>
    </Link>
    <p className="text-slate-400 font-xs">create an employer account</p>
    <p className="text-slate-400 font-xs">create an applicant account</p>
    {/* <button className="btn w-52 bg-[#8224e3] text-slate-100">View Aplications</button> */}
    </div>
  </>
  );
}
