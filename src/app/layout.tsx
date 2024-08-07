import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Footer from "@/app/_components/footer";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Barber ",
  description: "BARBERSHOP SCHEDULING PROJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black" lang="en">
      <body className={nunito.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
