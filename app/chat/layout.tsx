import { SideMenu } from "@/widget/side-menu/side-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideMenu />
      {children}
    </div>
  );
}
