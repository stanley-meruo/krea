"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-1 text-sm rounded-full bg-gray-200 dark:text-black font-semibold hover:bg-gray-400 hover:text-white transition cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
