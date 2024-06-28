"use client";

import UserInfoForm from "@/features/mypage/myaccount/user-form";
import Link from "next/link";
import { useParams } from "next/navigation";

export const menuList = [
  { key: 1, item: "계정", link: "accountConfig" },
  { key: 2, item: "알림", link: "alarmConfig" },
  { key: 3, item: "친구", link: "friendConfig" },
  { key: 4, item: "채팅", link: "chatConfig" },
  { key: 4, item: "관리자", link: "admin" },
];

export default function Config({ params }: { params: { user: [string] } }) {
  console.log("params", params);
  return (
    <div className="lg:flex w-full">
      <div className="lg:block  min-w-[201px] lg:h-screen bg-secondary text-black text-xl">
        <ul className="flex justify-center lg:block">
          {menuList.map((e) => {
            return (
              <Link key={e.key} href={`/chat/user/${e.link}`}>
                <li
                  className={`text-center py-10 max-lg:px-10 hover:bg-[#a4a4a487] ${
                    params.user[0] === e.link ? "bg-[#a4a4a487] " : ""
                  }`}
                >
                  {e.item}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="w-full mx-auto px-10">
        {params.user[0] === "accountConfig" ? (
          <div className="box-border">
            <h1 className="text-xl my-10">내정보</h1>
            <div className="bg-[#F0F0F0] rounded-md space-y-2 py-3 px-5 mb-10">
              <p>계정 : thdtjdgml415@gmail.com</p>
              <span className="sr-only">계정</span>
              <p>이름 : 송성희</p>
              <span className="sr-only">이름</span>
            </div>

            <UserInfoForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}
