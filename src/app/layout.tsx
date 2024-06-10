import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BreadcrumbItem from "@/components/breadCrumbs";
import Footer from "@/components/footer";
import ChatbotButton from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal portfolio",
  description: "A vivid description about me and skills ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatbotButton />
        <BreadcrumbItem />
        {children}
        <Footer />
      </body>
    </html>
  );
}
