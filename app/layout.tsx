import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/Component/Helper/scrollToTop";



const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "project portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
       
        {children}
        <ScrollToTopButton/>
        </body>
    </html>
  );
}