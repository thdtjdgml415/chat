"use client";

import {
  ChannelIcon,
  CommunityIcon,
  ConfigIcon,
  ChatIcon,
} from "@/public/Images/side-menuSvg";
import { SideHeader } from "./side-header";
import { SideItem } from "./side-item";
import useToggle from "@/hooks/useToggleStore";

const menuItems = [
  { id: 1, label: "친구", link: "/chat", icon: <CommunityIcon /> },
  { id: 2, label: "채팅방", link: "/chat", icon: <ChatIcon /> },
  { id: 3, label: "설정", link: "/chat/config", icon: <ConfigIcon /> },
];

export const SideMenu = () => {
  const { isOpen, toggleSide } = useToggle();

  return (
    <header
      className={`${
        isOpen ? "min-w-[200px]" : "max-w-[65px]"
      }  h-screen flex flex-col items-center px-3 bg-ST_primary border-r-2 border-r-[#ccc]`}
    >
      <div className="w-full h-9 mx-3 mt-6 mb-4 text-center">
        <div className="w-full flex items-center">
          <SideHeader toggleSide={toggleSide} isOpen={isOpen} />
        </div>
      </div>
      <div className="w-full mb-20">
        <ul className={` ${isOpen ? "w-full" : "w-[40px]"} text-black`}>
          {menuItems.map((list, index) => {
            return (
              <SideItem
                key={index}
                items={list}
                activeMenuWidthState={isOpen}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
};
