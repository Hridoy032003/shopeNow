"use client";

import React, { Suspense, useState } from "react";
import ProductNavbar from "@/components/ProductNavbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Filters from "@/components/Filters";
import { ecommerceFAQ } from "@/data/commonData";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
const page = () => {
  const [category, setCategory] = useState<"Men" | "Women" | "Kids">("Men");
  const [product, setProduct] = useState<any>([null]);

  return (
    <>
      <ProductNavbar />
      <main className="mb-10">
        <div className="flex justify-between items-center p-5 my-4 relative z-10">
          <h1 className="text-2xl ">Products</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel> {category}</SelectLabel>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row gap-5 relative z-0 ">
          <div className="w-1/4 ">
            <Filters />
          </div>
          <div className="w-3/4 flex">
            <ScrollArea className="w-full min-h-screen">
              <div className="grid grid-cols-4 gap-5 justify-betweenw-full min-h-screen p-10 overflow-y-scroll  ">
                <Suspense fallback={<div>Loading...</div>}>
                  <Card className="w-full min-w-[300px] min-h-[400px] max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-64"
                      />
                      {product.onSale && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-3 rounded-bl-lg">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h2>
                      <div className="flex items-center mt-2">
                        <span className="text-xl font-bold text-gray-700">
                          ${product.onSale ? product.salePrice : product.price}
                        </span>
                        {product.onSale && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {product.description}
                      </p>
                      <div className="mt-3">
                        <div className="flex items-center">
                          <span className="text-yellow-500">
                         
                            {"★".repeat(Math.floor(product.rating))}
                            {"☆".repeat(5 - Math.floor(product.rating))}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            ({product.reviews} reviews)
                          </span>
                        </div>
                        {product.isNew && (
                          <span className="mt-2 text-xs text-green-600">
                            New Arrival
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Suspense>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
