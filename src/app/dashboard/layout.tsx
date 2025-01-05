import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="l w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link className="flex items-center justify-center lg:justify-start gap-2" href="/">
          <Image src="/logo.png" width={42} height={42} alt="" className="rounded-full w-[42px] h-[42px] object-cover" />
          <span className="hidden lg:block font-bold text-purple">GasSchool</span>
        </Link>
        <Menu />
      </div>
      <div className="r w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-100 overflow-scroll p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
