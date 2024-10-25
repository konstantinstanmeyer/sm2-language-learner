import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

interface Params {
    id: string;
}

export async function GET(request: NextRequest, { params }: {params: Promise<{ id: string }> }){
    const { id } = await params;

    const text = await fs.readFile(process.cwd() + "/lib/languages/" + id + "/basic.txt", 'utf-8');

    const textBlocks = text.split('\n');
    
    let index = Math.floor(Math.random() * textBlocks.length - 1);
    
    const result: string = textBlocks[index];

    console.log(result)

    return NextResponse.json({ text: result}, { status: 200 });
}