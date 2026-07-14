import type { Metadata } from "next";
import "./(website)/globals.css";
import { Nunito, Nunito_Sans} from "next/font/google";
import clsx from "clsx";
import { cn } from "@/lib/utils";

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

<html lang="en" suppressHydrationWarning className={clsx(nunito.variable, nunito_sans.variable, "font-sans antialiased")}>

<body className={cn("min-h-screen bg-[#030712] text-white", "bg-linear-to-b from-[#030712] to-[#0f172a]")}>
  {children}
</body>

</html>

);
} 