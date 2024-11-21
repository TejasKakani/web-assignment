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
    <div className="bg-slate-500 h-12 flex justify-between px-5 text-white p-3">
      <div>
        <h1>Logo</h1>
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