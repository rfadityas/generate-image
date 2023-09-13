import React from "react";
import Auth from "@/components/Auth";
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      <Auth />
      <div className="w-full lg:w-1/2 bg-bg1 bg-cover bg-center min-h-screen"></div>
    </div>
  );
};

export default page;
