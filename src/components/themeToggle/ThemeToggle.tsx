import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  theme: string;
  toggleTheme: Dispatch<SetStateAction<string>>;
};

const ThemeToggle = ({ theme, toggleTheme }: Props) => {
  return (
    <div
      onClick={() => toggleTheme()}
      className="flex items-center relative justify-between w-2/13 rounded-full p-2 bg-[black]"
    >
      <Image src={"/moon.png"} alt="" width={18} height={18} />
      <div
        className={`ml-1 w-4 h-4 transition ease-out ${
          theme === "dark" ? "left-1" : "right-1"
        } rounded-full bg-[white] absolute`}
      ></div>
      <Image src={"/sun.png"} alt="" width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;
