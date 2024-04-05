import Link from "next/link";
import React from "react";

interface Props {}

const AuthLinks = (props: Props) => {
  let status = "notauthenticate";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
