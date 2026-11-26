import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "./fonts";
import NavBar from "./components/navbar";

export const metadata: Metadata = {
  title: "Scav Hunt",
  description: "Cool Site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${primaryFont.className} font-semibold tracking-snug text-text-primary h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/> 
        {children}
      </body>
    </html>
  );
}
