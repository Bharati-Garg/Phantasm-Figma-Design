import React from "react";
import { CiGift, CiHeadphones } from "react-icons/ci";
import { RiFolderSharedLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BottomIcon = () => {
  return (
    <div>
      <li>
        <CiHeadphones className="window mb-2" />
      </li>
      <li>
        <CiGift className="window mb-2" />
      </li>
      <li>
        <RiFolderSharedLine className="red-folder mb-5" />
      </li>
    </div>
  );
};

export default BottomIcon;
