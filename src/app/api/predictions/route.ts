import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (req: Request) => {
    const body = await req.json();
  
    const response = await axios.post(
      "https://api.replicate.com/v1/predictions",
      {
        version: "da77bc59ee60423279fd632efb4795ab731d9e3ca9705ef3341091fb989b7eaf",
        input: { prompt: body.prompt },
      },
      {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  
    if (response.status !== 201) {
      return NextResponse.json({ success: false });
    }
  
    const prediction = await response.data;
    return NextResponse.json(prediction);
  };