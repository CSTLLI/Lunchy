// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Lunchy";
const description =
  "Commandez votre plat avec grâce à vos cryptos-monnaies!";

export const metadata: Metadata = {
  title,
  description,

  metadataBase: new URL("https://lunchy.xyz"),
  creator: "cstlli",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
