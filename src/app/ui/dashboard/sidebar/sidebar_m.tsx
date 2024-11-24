import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { SiHiveBlockchain } from "react-icons/si";

export default function SideBarM(){
    return(
        <div className="bg-black h-full fixed border-white border-2 rounded-md p-4 flex flex-col w-16 gap-8 md:hidden">
          <img src="https://via.placeholder.com/150" alt="logo" className="w-10 h-10" />
            <ul className="text-white">
            <Link href="/dashboard">
            <li className="p-2 hover:bg-purple-700">
              <MdDashboard />
            </li>
            </Link>
            <Link href="/dashboard/user">
            <li className="p-2 hover:bg-purple-700">
              <LuUsers />
            </li>
            </Link>
            <Link href="/dashboard/content">
            <li className="p-2 hover:bg-purple-700">
              <MdContentCopy />
            </li>
            </Link>
            <Link href="/dashboard/engagement">
            <li className="p-2 hover:bg-purple-700">
              <CiTimer />
            </li>
            </Link>
            <Link href="/dashboard/blockchain">
            <li className="p-2 hover:bg-purple-700">
              <SiHiveBlockchain />
            </li>
            </Link>
            </ul>
      </div>
    );
}