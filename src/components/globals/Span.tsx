"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Span = ({ children, className }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <span
      className={`${
        className
          ? className
          : `${theme === "dark" ? "text-[white]" : "text-[black]"}`
      }`}
    >
      {children}
    </span>
  );
};

export default Span;
