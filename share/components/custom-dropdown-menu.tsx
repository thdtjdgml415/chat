import { createRoomListProps } from "@/features/chat/components/chatroom-menu";
import useModalStore from "@/hooks/useModalStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/share/ui/dropdown-menu";

import { CiMenuKebab } from "react-icons/ci";

export default function CustomDropdownMenu({
  createRoomList,
}: {
  createRoomList: createRoomListProps[];
}) {
  const { setOpen } = useModalStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CiMenuKebab />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {createRoomList.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              aria-valuetext={`${item.roomType}`}
              onClick={() =>
                setOpen({
                  name: item.name,
                  roomType: item.roomType,
                  isOpen: true,
                })
              }
            >
              {item.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
