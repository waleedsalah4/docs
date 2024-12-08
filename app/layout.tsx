import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | Documentation",
  },
  description:
    " documentation",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        {/* <ThemeProvider> */}
        <RootProvider>{children}</RootProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
