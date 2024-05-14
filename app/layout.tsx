import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoginModal  from "./components/modals/LoginModal";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnB",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto officiis error, quas doloremque vero quo ipsam quia quisquam harum, consequatur debitis modi! Dolor expedita, eaque modi itaque consequatur assumenda.
    </p>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">
        {children}
        </div>
        {/* <Modal label="Modal text" content={content} isOpen={false}/> */}
        <LoginModal />
        </body>
    </html>
  );
}
