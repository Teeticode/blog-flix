"use client";
import React, { Key, useContext } from "react";
import Div from "../globals/Div";
import MotionDiv from "../globals/MotionDiv";
import H1 from "../globals/H1";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import P from "../globals/P";

type Props = {
  openSideBar: boolean;
};

function SideBar({ openSideBar }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <MotionDiv
      key={openSideBar ? "open" : "closed"}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, type: "tween" }}
      className={`h-screen top-0 py-4 px-2 left-0 w-11/12 absolute ${
        theme === "dark" ? "bg-[#333333]" : "bg-[#F3F3F3]"
      }`}
    >
      <Div className="bg-[transparent] flex flex-row items-center justify-center">
        <H1 color={theme === "dark" ? "white" : "black"}>Odari Creations</H1>
      </Div>
      <Div className="bg-[transparent] mt-20 flex flex-col items-center justify-center">
        <Div
          className={`flex flex-col h-full items-center justify-center oyamo_page_links`}
        >
          <Link href="">
            <P className="mr-3 mt-4 ">Homepage</P>
          </Link>
          <Link href="">
            <P className="mr-3 mt-4">Contact</P>
          </Link>
          <Link href="">
            <P className="mr-3 mt-4">About</P>
          </Link>
          <Link href="">
            <P className="mr-3 mt-4">Write</P>
          </Link>
          <Link href="">
            <P className="mr-3 mt-4">Logout</P>
          </Link>
        </Div>
      </Div>
    </MotionDiv>
  );
}

export default SideBar;
