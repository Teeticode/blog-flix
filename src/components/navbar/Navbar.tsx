import Image from "next/image";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center px-4 justify-between w-full h-100 bg-[white] p-8">
      <div className="flex flex-grow ">
        <Image
          src={"/x.png"}
          className="mx-1"
          alt="twitter"
          width={40}
          height={40}
        />
        <Image
          className="mx-1"
          src={"/instagram.png"}
          alt="twitter"
          width={40}
          height={40}
        />
        <Image
          className="mx-1"
          src={"/tiktok.png"}
          alt="twitter"
          width={40}
          height={40}
        />
        <Image
          className="mx-1"
          src={"/youtube.png"}
          alt="twitter"
          width={40}
          height={40}
        />
      </div>
      <div className="logo flex-grow text-center">
        {/* <Image src={"/logo_light.png"} alt="light_logo" width={150} height={150} /> */}
        <h1 className="text-2xl font-semibold">Oyamo Odari</h1>
      </div>
      <div className="flex flex-grow items-center flex-row justify-evenly">
        <ThemeToggle />
        <Link href="">Homepage</Link>
        <Link href="">Contact</Link>
        <Link href="">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
