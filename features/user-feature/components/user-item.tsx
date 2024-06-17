import { User } from "@/entities/user/user";
import React from "react";

const UserItem: React.FC<User> = ({ email, name, status }) => {
  return (
    <li className="flex items-center text-md rounded-sm text-black hover:hover:bg-black/10 pl-2">
      {status ? (
        <span className="w-2 h-2 bg-green-500 rounded-lg mr-5"></span>
      ) : (
        <span className="w-2 h-2 bg-red-500 rounded-lg mr-5"></span>
      )}
      <p className="text-md font-light">{name}</p>
    </li>
  );
};

export default UserItem;
