import "@/app/globals.css";
import Header from "@/app/head";
import { FC, ReactNode } from "react";
import { Metadata } from "next";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Econovation",
  description: "Econovation Page",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ko">
      <Header />
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
