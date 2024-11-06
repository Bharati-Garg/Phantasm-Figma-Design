import React from "react";
import { PiWindowsLogoThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { IoFolderOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BottomIcon from "./BootomIcon.js";

const Sidebar = () => {
  return (
    <div className="bg-white">
      <div className="m-2">
        <img src="/Image/phantasm_logo_icon_-01_480 1.png" />
      </div>
      <div className="m-4">
        <Link>
          <PiWindowsLogoThin className="window" />
        </Link>
      </div>
      <div className="m-4">
        <Link>
          <HiOutlineShoppingBag className="window" />
        </Link>
      </div>
      <div className="m-4">
        <Link>
          <LuUsers2 className="window" />
        </Link>
      </div>
      <div className="m-4 folder">
        <Link>
          <IoFolderOutline className="window" />
        </Link>
      </div>
      <div className="m-4">
        <Link>
          <AiOutlineMessage className="window" />
        </Link>
      </div>
      <div className="m-4">
        <Link>
          <IoSettingsOutline className="window" />
        </Link>
      </div>
      <BottomIcon />
    </div>
  );
};

export default Sidebar;
