import "@/app/globals.css";
import Header from "@/app/head";
import { FC, ReactNode } from "react";
import { Metadata } from "next";
import Footer from "@/src/components/common/Footer.component";

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
