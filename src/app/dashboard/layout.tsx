import SideBar from "../ui/dashboard/sidebar/sidebar";
import SideBarM from "../ui/dashboard/sidebar/sidebar_m";
import NavBar from "../ui/dashboard/navbar/navbar";

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex bg-gray-200">
      <div>
        <SideBar />
        <SideBarM />
      </div>
      <div className="w-screen">
        <NavBar />
        {children}
      </div>
    </div>
  );
}