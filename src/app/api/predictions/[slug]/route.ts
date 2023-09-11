import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request, { params }: {params: { slug: string }}, resp: Response) {

const response = await axios.get(`https://api.replicate.com/v1/predictions/${params.slug}`, {
    headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
    },
});

// if (response.status !== 200) {
//     return NextResponse.error();
// }

const prediction = await response.data;
return NextResponse.json(prediction);
}