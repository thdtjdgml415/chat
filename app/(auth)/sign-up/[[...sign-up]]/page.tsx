import SignUpForm from "@/features/auth/sign-up/signup-form";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CorpSignUpForm from "@/features/auth/corp-sign-up/components/corp-signup-form";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center px-4">
        <div className="md:w-96 text-center space-y-4">
          <h1 className="text-3xl mt-20 font-bold text-[#2E2A47] ">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7e8ca0]">Create account!</p>
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">일반회원</TabsTrigger>
              <TabsTrigger value="corporate">기업회원</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="text-left">
                <SignUpForm />
              </div>
            </TabsContent>
            <TabsContent value="corporate">
              <div className="text-left">
                <CorpSignUpForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="h-full bg-ST_accent hidden md:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo" />
      </div>
    </div>
  );
}

// <TabsContent value="account">Make changes to your account here.</TabsContent>
// <TabsContent value="password">Change your password here.</TabsContent>
