"use server"

import { db, connectMongoDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const { name, brand, price, url } = await req.json();
    await connectMongoDB();
    const newProduct = {
        name,
        brand,
        price,
        url,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    await db.collection('products').insertOne(newProduct);
    return NextResponse.json({ message: "Product added" }, { status: 201 });
}

export async function GET(req: any) {
    console.log("GET function reached");
    await connectMongoDB();
    const products = await db.collection('products').find({}).toArray();
    return NextResponse.json({ products });
}
