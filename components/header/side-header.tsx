"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
interface SideMenuProps {
  toggleSide: () => void;
  isOpen: boolean;
}

export const SideHeader: React.FC<SideMenuProps> = ({ toggleSide, isOpen }) => {
  return (
    <div
      role="button"
      // eslint-disable-next-line jsx-a11y/aria-proptypes
      aria-expanded={`${isOpen ? true : false}`}
      aria-controls="sidemenu"
      className={cn(
        "min-w-[40px] min-h-[40px] mr-2 flex items-center justify-center rounded-md hover:bg-ST_grayHover1  "
      )}
      onClick={() => toggleSide()}
    >
      <RxHamburgerMenu className="text-black w-5 h-5" />
    </div>
  );
};
