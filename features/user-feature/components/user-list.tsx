"use client";

import ToggleListBtn from "@/components/toggle-list-button";
import UserItem from "./user-item";
import useToggle from "@/hooks/useToggle";

const UserList: React.FC = () => {
  const users = [
    { id: 1, name: "나", email: "thddsadada", status: true },
    { id: 2, name: "user1", email: "thddsadada", status: true },
    { id: 3, name: "user2", email: "thddsadada", status: false },
    { id: 4, name: "user3", email: "thddsadada", status: true },
    { id: 5, name: "user4", email: "thddsadada", status: true },
  ];
  const [isToggle, setIsToggle] = useToggle();
  return (
    <>
      <ToggleListBtn
        toggleFn={setIsToggle}
        state={isToggle}
        label={"유저 상태"}
      />
      {isToggle &&
        users?.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              email={user.email}
              name={user.name}
              status={user.status}
            />
          );
        })}
    </>
  );
};

export default UserList;
