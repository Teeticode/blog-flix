"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface OpacityProps extends HTMLMotionProps<"div"> {}
interface Props extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  key?: any;
}

const MotionDiv = ({ children, className, onPress }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      //   initial={{ opacity: 0, scaleX: 0 }}
      //   animate={{ opacity: 1, scaleX: 1 }}
      //   transition={{ duration: 0.4, type: "tween" }}
      className={` ${
        className
          ? className
          : `${theme === "dark" ? "bg-[black]" : "bg-[white]"}`
      }`}
      onClick={() => onPress && onPress()}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
