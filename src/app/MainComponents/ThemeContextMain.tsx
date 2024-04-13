"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";

export interface themeInterface {
  dark: "string";
  light: "string";
}
interface Props {
  children: React.ReactNode;
}

const ThemeContextMain = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.1, type: "spring" }}
      className={`${theme === "dark" ? "bg-[black]" : "bg-[white]"}`}
    >
      {children}
    </motion.div>
  );
};

export default ThemeContextMain;
