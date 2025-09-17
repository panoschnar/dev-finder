import React from "react";
import { logoIcon } from "../utils/icons";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-b-md p-4 mb-6 flex items-center justify-center bg-white">
      <Link href="/">{logoIcon}</Link>
    </div>
  );
};
