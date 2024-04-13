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
import useStyleStore from "@/store/styleUtils";

interface Props {}

const Navbar = (props: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { setSideBarOpen, sideBarOpen } = useStyleStore((state) => state);
  return (
    <Div className="flex items-center px-4 justify-between w-full h-100 p-8">
      {sideBarOpen ? (
        <SideBar openSideBar={sideBarOpen} />
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
        <Div
          className={`flex flex-row lg:flex md:hidden xm:hidden sm:hidden  oyamo_page_links`}
        >
          <Link href="">
            <P className="mr-3 sm:hidden md:hidden lg:flex xl:flex">Homepage</P>
          </Link>
          <Link href="">
            <P className="mr-3 sm:hidden md:hidden lg:flex xl:flex">Contact</P>
          </Link>
          <Link href="">
            <P className="mr-3 sm:hidden md:hidden lg:flex xl:flex">About</P>
          </Link>
        </Div>
        <Div
          className={`flex flex-row xm:hidden sm:hidden md:hidden lg:flex xl:flex`}
        >
          <AuthLinks />
        </Div>
        <MotionDiv
          onPress={() => {
            setSideBarOpen(!sideBarOpen);
          }}
          className="flex flex-row mr-4 absolute right-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {sideBarOpen ? (
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
                fontSize: 30,
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
