import type { Metadata } from "next";
import "./(website)/globals.css";
import { Nunito, Nunito_Sans, Geist } from "next/font/google";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevSpectra",
  description:
    "Digital engineering studio building modern solutions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

return (

<html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>

<body className={clsx(nunito.className, nunito_sans.className, "font-sans antialiased")}>
  {children}
</body>

</html>

);
} 