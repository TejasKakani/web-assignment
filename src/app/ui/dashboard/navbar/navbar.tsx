"use client";

import { useState } from "react";
import { MenuButton } from "./menubutton";
import MenuBar from "../menubar/menubar";

export interface NavListProps {
  classes?: string,
  subClasses?: string
}

function NavList({ classes = "", subClasses = "" }: NavListProps): JSX.Element {
  return(
    <ul className={classes}>
      <li className={subClasses}>Home</li>
      <li className={subClasses}>Dashboard</li>
      <li className={subClasses}>Settings</li>
    </ul>
  );
}

export default function NavBar() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ width: "-webkit-fill-available"}} className="bg-black border-white border-2 fixed rounded-md h-12 flex justify-between px-5 text-white p-3 md:left-48 left-16">
      <div className="flex">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5Yl8Y17JjFZnFEySotX7S97ZMgKzkbqEOg&s" alt="logo" className="invert w-20 " />
      </div>
      <div className="flex">
        <NavList classes="md:flex gap-3 hidden" />
        <div className="md:hidden">
          <MenuButton
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            strokeWidth="4"
            color="#3399cc"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width="40"
            height="24"
            extras={{ classes: "z-10 relative" }}
          />
          {
            isOpen && <MenuBar NavList={NavList} />
          }
        </div>
      </div>
    </div>
  );
}