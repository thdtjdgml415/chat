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
  { id: 2, label: "채팅방", link: "/chat/chatroom", icon: <ChatIcon /> },
  {
    id: 3,
    label: "설정",
    link: "/chat/user/accountConfig",
    icon: <ConfigIcon />,
  },
];

export const SideMenu = () => {
  const { isToggle, toggleFn } = useToggle();

  return (
    <header
      className={`${
        isToggle ? "min-w-[200px]" : "max-w-[65px]"
      }  h-screen hidden sm:flex flex-col items-center px-3 bg-ST_primary border-r-2 border-r-[#ccc] `}
    >
      <div className="w-full h-9 mx-3 mt-6 mb-4 text-center">
        <div className="w-full flex items-center">
          <SideHeader toggleFn={toggleFn} isToggle={isToggle} />
        </div>
      </div>
      <div className="w-full mb-20">
        <ul className={` ${isToggle ? "w-full" : "w-[40px]"} text-black`}>
          {menuItems.map((list, index) => {
            return (
              <SideItem
                key={index}
                items={list}
                activeMenuWidthState={isToggle}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
};
