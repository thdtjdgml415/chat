"use client";

import { cn } from "@/share/lib/utils";
import { Button, buttonVariants } from "@/share/ui/button";

import { useMutationPermissionMember } from "../hooks/useMutationPermissionMember";
import { PermissionProps } from "../model/myConfig";

export type ActionPorps = {
  id: number;
  state: string;
  companyCode: string;
};

export default function AdminPermissionitem({
  id,
  name,
  loginId,
  birthDate,
  companyCode,
  email,
  gender,
  role,
  state,
  profile,
}: PermissionProps) {
  const mutation = useMutationPermissionMember();

  const handleAction = (actionType: string, code: string) => {
    // 여기에서 actionType에 따라 다른 API 호출을 수행하거나, 다른 로직을 실행
    if (actionType === "approve") {
      const data: ActionPorps = { id, state: "APPROVED", companyCode: code };
      mutation.mutate(data);
    } else if (actionType === "reject") {
      const data: ActionPorps = { id, state: "DENIED", companyCode: code };
      mutation.mutate(data);
    }
  };

  return (
    <li key={id} className="flex items-center justify-between">
      <p className="mr-10">{name}</p>
      <Button
        onClick={() => handleAction("approve", companyCode)}
        className="mr-5"
      >
        승인
      </Button>
      <Button
        onClick={() => handleAction("reject", companyCode)}
        className={cn(buttonVariants({ variant: "destructive" }))}
      >
        거절
      </Button>
    </li>
  );
}
