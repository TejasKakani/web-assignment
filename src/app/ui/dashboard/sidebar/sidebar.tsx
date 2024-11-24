import Link from "next/link";

export default function SideBar() {
    return (
      <div className="border-white bg-black border-2 fixed rounded-md w-48 hidden md:block h-full">
        <div className="flex p-4 gap-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPP7lMOjTtRsngMUMYjGLPSBZ0tfALBuhdg&s" alt="logo" className="w-20 h-20" />
          <h1 className="text-white">User Details</h1>
        </div>
        <div>
          <ul className="text-white">
            <Link href="/dashboard">
            <li className="p-2 hover:bg-gray-700">Dashboard</li>
            </Link>
            <Link href="/dashboard/user">
            <li className="p-2 hover:bg-gray-700">User</li>
            </Link>
            <Link href="/dashboard/content">
            <li className="p-2 hover:bg-gray-700">Content</li>
            </Link>
            <Link href="/dashboard/engagement">
            <li className="p-2 hover:bg-gray-700">Engagement</li>
            </Link>
            <Link href="/dashboard/blockchain">
            <li className="p-2 hover:bg-gray-700">Blockchain</li>
            </Link>
          </ul>
        </div>
      </div>
    );
}