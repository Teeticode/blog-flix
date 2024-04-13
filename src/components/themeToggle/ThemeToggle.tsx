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
      className="flex items-center absolute justify-between w-3/13 rounded-full p-3 bg-[black]"
    >
      <Image src={"/moon.png"} alt="" width={18} height={18} />
      <div
        className={`ml-1 w-5 h-5 transition ease-out ${
          theme === "dark" ? "left-1" : "right-2"
        } rounded-full bg-[white] absolute`}
      ></div>
      <Image src={"/sun.png"} alt="" width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;
