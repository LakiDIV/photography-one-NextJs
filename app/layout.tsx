import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar/NavBar";
import MailSubscriptionsForm from "@/components/Elements/EmailSubCard";
import SocialBacklinks from "@/components/Social/SocialBacklinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing Website",
  description: "Experimenting with new layouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " selection:bg-orange-300 selection:text-gray-700"
        }
      >
        <main className="">{children}</main>
        <MailSubscriptionsForm />
        <Footer />
      </body>
    </html>
  );
}
