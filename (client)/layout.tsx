import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "% - Diy online store",
    default: "Diy online store",
  },

  description: "An online shop for DIY products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className=" flex flex-col min-h-screen">
        <Header />
        <main className="flex-1"> {children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
