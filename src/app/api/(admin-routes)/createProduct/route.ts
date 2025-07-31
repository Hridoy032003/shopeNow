import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../../../lib/prism";

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();

    // Demo data
    const product = await prisma.products.create({
      data: {
        name: "Demo Product",
        price: 99.99,
        category: "Men",
        type: "Demo Type",
        discount: 10,
        description: "This is a demo product for testing.",
        salePrice: 89.99,
        onSale: true,
        imageUrl: "https://via.placeholder.com/150",
        rating: 4.5,
        reviews: 12,
        stock: 100,
        isNew: true,
        isFeatured: false,
        isBestSeller: false,
        isTrending: true,
        isPopular: true,
      },
    });

    return NextResponse.json(
      { message: "Product created successfully", product, user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product", details: error?.toString() },
      { status: 500 }
    );
  }
}
