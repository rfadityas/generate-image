"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname !== "/dashboard") return null;
  return (
    <div className="text-center my-10">
      <p>
        © 2023{" "}
        <span>
          <Link
            className={""}
            href={"https://github.com/rfadityas"}
            target="_blank"
          >
            JarFajar
          </Link>
        </span>{" "}
        | API{" "}
        <span>
          <Link className={""} href={"https://replicate.com/"} target="_blank">
            replicate.com
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
