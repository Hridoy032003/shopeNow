"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

const ProductNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  return (
    <div>
      <nav className="flex justify-between items-center p-5 shadow-md shadow-black/10">
        <div className="text-2xl font-bold">
          <Link href="/">ShopNow</Link>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <Input type="text" placeholder="Search" />
            <Button variant="outline">Search</Button>
          </div>
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    {state.itemCount}
                  </span>
                )}
          </Button>
        </div>
      </nav>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductNavbar;
