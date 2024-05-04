import Image from "next/image";

import Search from "@mui/icons-material/Search";
import Tune from "@mui/icons-material/Tune";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Settings from "@mui/icons-material/Settings";
import Apps from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import ExpandMore from "@mui/icons-material/ExpandMore";
export default function Header() {
  return (
    <>
      <div className="bg-slate-100 flex justify-between w-full h-fit items-center p-3">
        <div className="flex items-center gap-4">
          <Image
            src={"/logo_gmail.png"}
            loading="eager"
            width={120}
            height={30}
            alt="gmail Logo"
          />
        </div>

        <div className=" rounded-full p-3 w-1/2  flex gap-2 bg-slate-200">
          <Search />
          <input
            type="text"
            placeholder="Search in mail"
            className="bg-inherit w-11/12 outline-none"
          />
          <Tune />
        </div>

        <div className="flex justify-between gap-2 items-center ">
          <div className="bg-slate-200 p-3 flex items-center cursor-pointer rounded-full">
            <div className="bg-green-600 rounded-full h-3 w-3 mr-2"></div>
            <span>Active</span>
            <ExpandMore />
          </div>
          <HelpOutline className="cursor-pointer" />
          <Settings className="cursor-pointer" />
          <Apps className="cursor-pointer" />
          <Avatar alt="Joy pradhan" src="" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}
