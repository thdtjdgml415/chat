"use client";

import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// https://7087-119-196-98-145.ngrok-free.app/api/member/login/google

export default function GoogleLogin() {
  const backend = process.env.NEXT_PUBLIC_API_GOOGLE_URL;

  const router = useRouter();
  function handleGoogleLogin() {
    if (backend) router.push(backend + "/api/member/login/google");
  }
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex items-center text-black text-md w-full h-10 my-5"
      )}
      onClick={handleGoogleLogin}
    >
      <Image
        src="/google-logo.svg"
        height={30}
        width={30}
        alt="logo"
        className="mr-1"
      />
      Google
    </Button>
  );
}
