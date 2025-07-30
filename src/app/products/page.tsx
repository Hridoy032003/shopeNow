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
import { ScrollArea } from "@/components/ui/scroll-area";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
  const [category, setCategory] = useState<"Men" | "Women" | "Kids">("Men");


  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleCategoryChange = (value: string) => {
    setCategory(value as "Men" | "Women" | "Kids");
  };

  return (
    <>
      <ProductNavbar />
      <main className="mb-10">
        <div className="flex justify-between items-center p-5 my-4 relative z-10">
          <h1 className="text-2xl font-bold">Products</h1>
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row gap-5 relative z-0">
          <div className="w-1/4">
            <Filters />
          </div>
          <div className="w-3/4 flex">
            <ScrollArea className="w-full min-h-screen">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
                <Suspense fallback={<div>Loading...</div>}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Suspense>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
