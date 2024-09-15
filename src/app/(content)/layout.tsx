import { MainHeader } from "@/components/main-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
