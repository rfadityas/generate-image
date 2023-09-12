"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Navbar = async () => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);
  return (
    <nav className="text-white p-4 fixed top-0 left-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">.</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
