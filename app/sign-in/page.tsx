import Image from "next/image";

import GoogleLogin from "@/features/auth/login/google-login";
import dynamic from "next/dynamic";
import LoginForm from "@/features/auth/login/login-form";

// const LoginForm = dynamic(() => import("@/features/auth/login-form"), {
//   ssr: false,
// });

export default function signIn() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="text-3xl font-bold text-[#2E2A47] ">Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Create account to get back to your chat
          </p>
          <div className="text-left">
            <LoginForm />
          </div>

          <GoogleLogin />
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex  items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo" />
      </div>
    </div>
  );
}
