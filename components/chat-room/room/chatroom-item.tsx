"use client";

import React from "react";

import { IoIosMic } from "react-icons/io";
import { IoMdMicOff } from "react-icons/io";
import { ChatUserState } from "./chatroom-list";

// onClick 프로퍼티를 추가하기 위한 인터페이스
export interface UserItemProps extends ChatUserState {
  onClick?: (id: number) => void;
}

export const UserItem = ({ id, name, volumeState }: UserItemProps) => {
  //   const onClickVolumeCheck = () => {
  //     onClick(id);
  //   };
  return (
    <li key={id} className="flex justify-between items-center mb-2">
      <p className="text-title16 font-ST_regular">{name}</p>

      <div
        className="p-2 cursor-pointer rounded-md hover:bg-white/10"
        // onClick={onClickVolumeCheck}
      >
        {volumeState ? <IoIosMic /> : <IoMdMicOff />}
      </div>
    </li>
  );
};
