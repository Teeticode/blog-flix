import React from "react";
import Div from "../globals/Div";

type Props = {};

function SideBar({}: Props) {
  return (
    <Div className="bg-[red] h-screen top-0 py-4 px-2 left-0 w-1/2 absolute">
      SideBar
    </Div>
  );
}

export default SideBar;
