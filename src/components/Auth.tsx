import React from "react";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButton from "@/components/AuthButton";
import { AiFillCode } from "react-icons/ai";

const Auth = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="w-full lg:w-1/2 flex flex-col p-8 justify-between gap-4 min-h-screen">
      <div className="flex items-center text-6xl">
        <AiFillCode />
        <h1 className="font-bold">MindMe.</h1>
      </div>
      <div className="w-full lg:w-3/4">
        <h1 className="text-4xl lg:text-7xl font-bold">Get Inspired,</h1>
        <h1 className="text-4xl lg:text-7xl font-bold">Get Imagining,</h1>
        <h1 className="text-4xl lg:text-7xl font-bold">Get Generating.</h1>
        <p className="text-sm lg:text-md font-light mt-4 lg:mt-8">
          Get Inspired, Get Imagining, Get Generating Find inspiration, let your
          imagination run wild, and start generating incredible images that tell
          your unique story.
        </p>
      </div>
      <div className="w-full">
        {session ? (
          <AuthButton isLogin={true} />
        ) : (
          <AuthButton isLogin={false} />
        )}
      </div>
    </div>
  );
};

export default Auth;
