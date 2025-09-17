import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses =
      "bg-gradient-to-r from-violet-600 to-blue-300 text-white hover:bg-gradient-to-l from-violet-600 to-blue-300 focus:ring-violet-600";
  } else if (variant === "secondary") {
    variantClasses =
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
  } else if (variant === "outline") {
    variantClasses =
      "border px-2 py-1 rounded hover:bg-gray-100 focus:ring-purple-800";
  }

  const baseClasses =
    "px-4 py-2 rounded font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
};
