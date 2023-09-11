"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

export default function Tools() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(
      "/api/predictions",
      {
        prompt: e.target.prompt.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let prediction = await response.data;
    console.log(prediction);

    // if (response.status !== 201) {
    //   setError(prediction.detail);
    //   return;
    // }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await axios.get("/api/predictions/" + prediction.id);
      prediction = response.data;
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };

  return (
    <div>
      <Head>
        <title>Replicate + Next.js</title>
      </Head>

      <p>
        Dream something with{" "}
        <a href="https://replicate.com/stability-ai/stable-diffusion">SDXL</a>:
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder="Enter a prompt to display an image"
        />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {prediction && (
        <div>
          {prediction.output && (
            <div>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes="100vw"
              />
            </div>
          )}
          <p>status: {prediction.status}</p>
        </div>
      )}
    </div>
  );
}
