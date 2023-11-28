import "@/app/globals.css";
import { FC, ReactNode } from "react";
import { Metadata } from "next";
import { Header } from "./head";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
