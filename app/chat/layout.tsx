import { SideMenu } from "@/components/header/side-menu";

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
