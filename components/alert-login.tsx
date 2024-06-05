import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function AlertLogin() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/sign-in");
  };

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>로그인에 실패하셨습니다.</AlertDescription>
      <Button
        className={cn(
          buttonVariants({ variant: "destructive", size: "lg" }),
          "mt-10 text-center"
        )}
        onClick={handleClick}
      >
        확인
      </Button>
    </Alert>
  );
}

export default AlertLogin;
