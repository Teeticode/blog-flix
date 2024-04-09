"use client";
import Link from "next/link";
import React, { useContext } from "react";
import P from "../globals/P";
import Span from "../globals/Span";
import { themeTextStyles } from "@/style_utils/globalStyleUtils";
import { ThemeContext, Theme } from "@/context/ThemeContext";

interface Props {}

const AuthLinks = (props: Props) => {
  let status = "notauthenticate";
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">
            <P className="mr-3">Write</P>
          </Link>
          <Span>Logout</Span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
