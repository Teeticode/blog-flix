"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { HTMLAttributes, useContext } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

const Div = ({ children, className, onPress }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        className
          ? className
          : `${theme === "dark" ? "bg-[black]" : "bg-[white]"}`
      }`}
      onClick={() => onPress && onPress()}
    >
      {children}
    </div>
  );
};

export default Div;
