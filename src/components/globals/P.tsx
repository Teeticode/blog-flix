import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const P = ({ children, className }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <p
      className={`${
        theme === "dark" ? "text-[white]" : "text-[black]"
      } ${className}`}
      style={{ fontSize: 16 }}
    >
      {children}
    </p>
  );
};

export default P;
