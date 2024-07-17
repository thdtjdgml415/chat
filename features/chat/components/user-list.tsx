"use client";

import { Skeleton } from "@/share/ui/skeleton";
import { useQueryGetChatUserList } from "../hooks/useQueryGetChatUserList";
import UserItem from "./user-item";
import { ChatUser } from "../model/chat";

const UserList: React.FC = () => {
  const { data: list, error, isLoading } = useQueryGetChatUserList();

  if (isLoading)
    return (
      <div className="flex flex-col space-y-3 my-5">
        <Skeleton className="h-[30px] w-full rounded-xl" />
        <Skeleton className="h-[30px] w-full rounded-xl" />
        <Skeleton className="h-[30px] w-full rounded-xl" />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;
  if (!list || list.length === 0)
    return <div className="my-10">유저 목록이 없습니다.</div>;

  return (
    <>
      {/* {users?.data.map((user) => { */}
      {list.map((user: ChatUser) => {
        const {
          id,
          loginId,
          name,
          birthDate,
          gender,
          email,
          role,
          companyCode,
          state,
          profile,
          profileImage,
          isConnected,
        } = user;
        return (
          <UserItem
            key={id}
            id={id}
            loginId={loginId}
            name={name}
            birthDate={birthDate}
            gender={gender}
            email={email}
            role={role}
            companyCode={companyCode}
            state={state}
            profile={profile}
            profileImage={profileImage}
            isConnected={isConnected}
          />
        );
      })}
    </>
  );
};

export default UserList;
