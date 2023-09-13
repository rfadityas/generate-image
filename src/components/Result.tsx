"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import usePromptStore from "@/utils/store";
import { VscOutput } from "react-icons/vsc";
import { AiOutlineReload } from "react-icons/ai";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Result = () => {
  const { prompt, responseData } = usePromptStore();
  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="w-3/4 drop-shadow-lg">
          <CardHeader>
            <CardTitle className="flex gap-3 items-center">
              <VscOutput />
              Result is here..
            </CardTitle>
          </CardHeader>
          <CardContent>
            {responseData && (
              <>
                {responseData[0].output && (
                  <>
                    <div className="flex flex-col gap-4">
                      <Image
                        src={responseData[0].output[0]}
                        alt="Picture of the author"
                        width={responseData[0].input.width}
                        height={responseData[0].input.height}
                      />
                      <Link href={responseData[0].output[0]} target="_blank">
                        <Button className="w-full">Download</Button>
                      </Link>
                    </div>
                  </>
                )}
                {responseData[0].status !== "succeeded" && (
                  <>
                    <div className="flex items-center gap-2 text-4xl font-bold">
                      <AiOutlineReload className="animate-spin" />
                      <p>Generating...</p>
                    </div>
                  </>
                )}
              </>
            )}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Result;
