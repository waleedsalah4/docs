"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  console.log("theme: ", theme);
  console.log("resolvedTheme: ", resolvedTheme);

  return <p>Logo: {resolvedTheme}</p>;
};

export default Logo;
