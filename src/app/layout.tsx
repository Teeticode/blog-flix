import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeContextMain from "./MainComponents/ThemeContextMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oyamo Odari Creations",
  description: "Best content in the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeContextMain>
            <div className="w-full  h-screen  flex justify-center ">
              <div className="lg:mx-10  px-10  w-full  h-100 py-10">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeContextMain>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
