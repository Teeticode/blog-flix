import Image from "next/image";
import React from "react";

type Props = {};

const ThemeToggle = (props: Props) => {
  return (
    <div className="flex items-center relative justify-between w-2/13 rounded-full p-2 bg-[black]">
      <Image src={"/moon.png"} alt="" width={18} height={18} />
      <div className="ml-1 w-4 h-4 left-1 rounded-full bg-[white] absolute"></div>
      <Image src={"/sun.png"} alt="" width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;
