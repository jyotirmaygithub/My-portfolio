import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatbotButton from "@/components/chatbot";
import ScrollProgress from "@/components/motion/ScrollProgress";
import SiteBackground from "@/components/site-background";
import { profile } from "@/Data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className} antialiased`}
      >
        <SiteBackground />
        <ScrollProgress />
        <ChatbotButton />
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <div className="relative z-[1]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
