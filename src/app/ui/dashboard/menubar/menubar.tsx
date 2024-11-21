import { FunctionComponent } from "react";
import { NavListProps } from "../navbar/navbar";

interface MenuBarProps {
  NavList: FunctionComponent<NavListProps>;
}

export default function MenuBar({NavList}: MenuBarProps): JSX.Element {
    return(
        <div className="bg-slate-700 top-0 right-0 absolute w-full sm:w-1/2 h-screen">
          <NavList classes="text-white pt-12" subClasses="p-2 hover:bg-slate-400"/>
        </div>
    );
}