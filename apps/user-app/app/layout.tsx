import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import AppbarWrapper from "../components/AppbarWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            <AppbarWrapper />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
