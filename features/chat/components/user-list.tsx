"use client";

import { Skeleton } from "@/share/ui/skeleton";
import { useQueryGetChatUserList } from "../hooks/useQueryGetChatUserList";
import UserItem from "./user-item";

const UserList: React.FC = () => {
  const { data: users, error, isLoading } = useQueryGetChatUserList();
  console.log("chatroom user list ------", users);
  if (isLoading)
    return (
      <div className="flex flex-col space-y-3 my-5">
        <Skeleton className="h-[30px] w-full rounded-xl" />
        <Skeleton className="h-[30px] w-full rounded-xl" />
        <Skeleton className="h-[30px] w-full rounded-xl" />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;
  if (!users || users.data.length === 0)
    return <div className="my-10">유저 목록이 없습니다.</div>;

  return (
    <>
      {users?.data.map((user) => {
        const {
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
        } = user;
        return (
          <UserItem
            id={id}
            loginid={loginid}
            name={name}
            birthDate={birthDate}
            gender={gender}
            email={email}
            role={role}
            companyCode={companyCode}
            state={state}
            profile={profile}
          />
        );
      })}
    </>
  );
};

export default UserList;
