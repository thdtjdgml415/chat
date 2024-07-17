import { Suspense } from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<p>Loading ConfigChatRoomSide...</p>}>
      {children}
    </Suspense>
  );
}
