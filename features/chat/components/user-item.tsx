import React from "react";
import { User } from "../model/chat";

import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/share/ui/avatar";
import { Button } from "@/share/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/share/ui/hover-card";
import { formatDate } from "@/share/lib/utils";

const UserItem: React.FC<User> = ({
  id,
  loginid,
  name,
  birthDate,
  gender,
  email,
  role,
  companyCode,
  state,
  profile,
}) => {
  return (
    <HoverCard>
      <li
        key={id}
        className="flex items-center text-md rounded-sm text-black hover:bg-black/10 pl-2"
      >
        {state ? (
          <span className="w-2 h-2 bg-green-500 rounded-lg mr-5"></span>
        ) : (
          <span className="w-2 h-2 bg-red-500 rounded-lg mr-5"></span>
        )}
        <HoverCardTrigger asChild>
          <Button variant="link">{name}</Button>
        </HoverCardTrigger>
      </li>
      <HoverCardContent className="w-30">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{loginid}</h4>
            <p className="text-sm">{profile}</p>
            <p>{email}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                {formatDate(birthDate)}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserItem;
