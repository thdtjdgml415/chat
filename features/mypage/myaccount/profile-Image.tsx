import { Avatar, AvatarFallback, AvatarImage } from "@/share/ui/avatar";

import { Profile } from "@/public/Images/side-menuSvg";
import { useQueryGetProfile } from "../hooks/useQueryGetProfile";

export default function ProfileImage() {
  const {
    data: imageData,
    error: imageError,
    isPending: imagePending,
    isLoading: imageLoading,
  } = useQueryGetProfile();

  console.log("imageData", imageData);
  return (
    <Avatar className="w-20 h-20">
      {<AvatarImage src="https://github.com/shadcn.png" />}
      <AvatarFallback>
        <Profile />
      </AvatarFallback>
    </Avatar>
  );
}
