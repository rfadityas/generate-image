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
            <div className="flex flex-col gap-4">
              <Image
                src={
                  "https://pbxt.replicate.delivery/2CvSzklESv6vK9RSFRxDAkoSiAblp1YDebqKC4swlSEcZuxIA/out-0.png"
                }
                alt="Picture of the author"
                width={1280}
                height={720}
              />
              <Button>asdasd</Button>
            </div>
            {responseData && (
              <>
                {responseData[0].output && (
                  <>
                    <div>
                      <Image
                        src={responseData[0].output[0]}
                        alt="Picture of the author"
                        width={responseData[0].input.width}
                        height={responseData[0].input.height}
                      />
                      <Button>asdasd</Button>
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
