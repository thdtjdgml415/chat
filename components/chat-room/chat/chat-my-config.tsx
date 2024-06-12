"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// import { useModal } from "@/hooks/useModal";

export const ChatMyConfig = () => {
  //   const { onOpen } = useModal();

  return (
    <>
      <div className="flex items-center justify-between px-4 my-5">
        <p className="text-title16 font-ST_bold">나</p>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-10 h-10 px-0 cursor-pointer"
          )}
        >
          {/* <Icons.config className="hover:bg-ST_grayHover1" /> */}
        </div>
      </div>

      <Button
        className={cn(
          buttonVariants({ size: "lg", variant: "destructive" }),
          "w-full rounded-none bg-ST_negative"
        )}
        // onClick={() =>
        //   onOpen("Alert", {
        //     title: "나가기",
        //     description: "정말 채팅방에서 나가시겠습니까?",
        //   })
        // }
      >
        나가기
      </Button>
    </>
  );
};
