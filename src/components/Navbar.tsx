"use client";
import React from "react";
import AuthButton from "@/components/AuthButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname !== "/dashboard") return null;

  return (
    <div className="flex justify-between bg-card px-28 py-4 items-center mb-10 lg:mb-0">
      <h1 className="text-4xl font-bold">MindMe.</h1>
      <div className="w-[10rem]">
        <AuthButton isLogin={true} />
      </div>
    </div>
  );
};

export default Navbar;
