"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Div from "../globals/Div";
import H1 from "../globals/H1";
import P from "../globals/P";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import MotionDiv from "../globals/MotionDiv";
import SideBar from "../sidebar/SideBar";

interface Props {}

const Navbar = (props: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <Div className="flex items-center px-4 justify-between w-full h-100 p-8">
      {openSideBar ? (
        <SideBar />
      ) : (
        <Div className="flex flex-grow ">
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
            src={"/youtube.png"}
            alt="twitter"
            width={40}
            height={40}
          />
        </Div>
      )}
      <Div className="logo flex-grow text-center">
        {/* <Image src={"/logo_light.png"} alt="light_logo" width={150} height={150} /> */}
        <H1>Oyamo Odari</H1>
        {/* <Image
          className="mx-1"
          src={"/oyamo_blog.jpg"}
          alt="twitter"
          width={200}
          height={200}
        /> */}
      </Div>
      <Div className="flex flex-grow items-center flex-row justify-evenly">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Div className={`flex flex-row lg:flex md:hidden sm:hidden`}>
          <Link href="">
            <P className="mr-3">Homepage</P>
          </Link>
          <Link href="">
            <P className="mr-3">Contact</P>
          </Link>
          <Link href="">
            <P className="mr-3">About</P>
          </Link>
        </Div>
        <Div className={`flex flex-row sm:hidden md:flex lg:flex`}>
          <AuthLinks />
        </Div>
        <MotionDiv
          onPress={() => {
            setOpenSideBar(!openSideBar);
          }}
          className="flex flex-row mr-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {openSideBar ? (
            <GrFormClose
              style={{
                color: theme === "dark" ? "#FFFFFF" : "#000000",
                fontSize: 30,
                cursor: "pointer",
              }}
            />
          ) : (
            <BiMenuAltLeft
              style={{
                color: theme === "dark" ? "#FFFFFF" : "#000000",
                fontSize: 25,
                cursor: "pointer",
              }}
            />
          )}
        </MotionDiv>
      </Div>
    </Div>
  );
};

export default Navbar;
