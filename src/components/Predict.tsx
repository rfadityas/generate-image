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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsChatRightTextFill } from "react-icons/bs";
import { TbPrompt } from "react-icons/tb";
import { IoMdResize } from "react-icons/io";
import { Button } from "@/components/ui/button";
import usePromptStore from "@/utils/store";
import axios from "axios";

const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

const Predict = () => {
  const {
    prompt,
    setPrompt,
    negativePrompt,
    setNegativePrompt,
    width,
    setWidth,
    height,
    setHeight,
    responseData,
    setResponseData,
  } = usePromptStore();

  const handleClick = async () => {
    const response = await axios.post(
      "/api/predictions",
      {
        prompt,
        negative_prompt: negativePrompt,
        width,
        height,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let prediction = await response.data;
    setResponseData([prediction]);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await axios.get("/api/predictions/" + prediction.id);
      prediction = response.data;
      if (response.status !== 200) {
        return;
      }
      setResponseData([prediction]);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="w-3/4 drop-shadow-lg">
          <CardHeader>
            <CardTitle className="flex gap-3 items-center">
              <BsChatRightTextFill />
              Lets generate!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 flex flex-col gap-4">
              <Label htmlFor="prompt" className="flex gap-2 items-center">
                <TbPrompt />
                Input Prompt
              </Label>
              <Input
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                id="prompt"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <Label htmlFor="negprompt" className="flex gap-2 items-center">
                <TbPrompt />
                Input Negative Prompt
              </Label>
              <Input
                onChange={(e) => {
                  setNegativePrompt(e.target.value);
                }}
                id="negprompt"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <Label htmlFor="width" className="flex gap-2 items-center">
                <IoMdResize />
                Width
              </Label>
              <Input
                type="number"
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                }}
                value={width}
                id="width"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <Label htmlFor="height" className="flex gap-2 items-center">
                <IoMdResize />
                Height
              </Label>
              <Input
                type="number"
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                }}
                value={height}
                id="height"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleClick}>
              Generate
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Predict;
