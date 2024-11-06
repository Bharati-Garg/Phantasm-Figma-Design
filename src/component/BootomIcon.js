import React from "react";
import { CiGift, CiHeadphones } from "react-icons/ci";
import { RiFolderSharedLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BottomIcon = () => {
  return (
    <div className="bottomicon ">
      <div className="m-4">
        <Link className="headphone">
          <CiHeadphones className="window" />
        </Link>
      </div>
      <div className="m-4">
        <Link className="gift">
          <CiGift className="window" />
        </Link>
      </div>
      <div className="m-4 pt-2">
        <Link>
          <RiFolderSharedLine className="red-folder" />
        </Link>
      </div>
    </div>
  );
};

export default BottomIcon;
