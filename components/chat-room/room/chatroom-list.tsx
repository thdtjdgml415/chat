"use client";

import { randomUUID } from "crypto";
import React, { useState } from "react";
import { UserItem } from "./chatroom-item";

export interface ChatUserState {
  id: number;
  name: string;
  volumeState: boolean;
}

const initialList: ChatUserState[] = [
  { id: 1, name: "나", volumeState: true },
  { id: 2, name: "user1", volumeState: true },
  { id: 3, name: "user2", volumeState: false },
  { id: 4, name: "user3", volumeState: true },
  { id: 5, name: "user4", volumeState: false },
];

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<ChatUserState[]>(initialList);

  //   const toggleVolumeState = (id: number) => {
  //     setUsers(
  //       users.map((user) =>
  //         user.id === id ? { ...user, volumeState: !user.volumeState } : user
  //       )
  //     );
  //   };

  return (
    <div>
      <h2 className="mb-3 text-title20 font-ST_bold">같이 플레이 중인 유저</h2>
      <ul>
        {users.map((el) => {
          return (
            <UserItem
              key={el.id}
              id={el.id}
              name={el.name}
              volumeState={el.volumeState}
              //   onClick={toggleVolumeState}
            />
          );
        })}
      </ul>
    </div>
  );
};
