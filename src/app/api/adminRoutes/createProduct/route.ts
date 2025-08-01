
import db from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { products } from "@/db/Schema";



export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, price, category, type, description, imageUrl, stock = 0 } = body;

    
    if (!name || !price || !category || !type || !description || !imageUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }




    const newProduct= await db.insert(products).values({
      name,
      price,
      category,
      type,
      description,
      imageUrl,
      stock,
    }).returning()

    return NextResponse.json(
      { message: "Product created successfully", newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}