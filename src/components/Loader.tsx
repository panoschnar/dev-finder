import { logoSymbolIcon } from "@/utils/icons";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-pulse">{logoSymbolIcon}</div>
    </div>
  );
};

export default Loader;
