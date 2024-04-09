"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  children: string;
  className?: string;
};

const H1 = ({ children, className }: Props) => {
  const [theme1, setTheme] = useState("");
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    setTheme(theme);
  }, []);
  return (
    <h1
      className={`${
        className
          ? className
          : (className = `text-2xl font-semibold ${
              theme1 === "dark" ? "text-[white]" : "text-[black]"
            }`)
      }`}
    >
      {children}
    </h1>
  );
};

export default H1;
