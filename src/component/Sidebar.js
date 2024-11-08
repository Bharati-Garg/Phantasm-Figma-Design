import React from "react";
import BootomIcon from "./BootomIcon";
import { PiWindowsLogoThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { IoFolderOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <div>
          <ul>
            <li>
              <img
                src="/Image/phantasm_logo_icon_-01_480 1.png "
                className="my-3"
              />
            </li>
            <li>
              <PiWindowsLogoThin className="window my-3" />
            </li>
            <li>
              <HiOutlineShoppingBag className="window my-3" />
            </li>
            <li>
              <LuUsers2 className="window my-3" />
            </li>
            <li className="window-active">
              <IoFolderOutline className="window-folder my-3" />
            </li>
            <li>
              <AiOutlineMessage className="window my-3" />
            </li>
            <li>
              <IoSettingsOutline className="window my-3 " />
            </li>
          </ul>
        </div>
        <BootomIcon />
      </div>
    </>
  );
};

export default Sidebar;
