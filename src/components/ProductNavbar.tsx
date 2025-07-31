"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";
import GlobalCart from "./GlobalCart";

const ProductNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);


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
              <GlobalCart/>
        </div>
      </nav>
     
    </div>
  );
};

export default ProductNavbar;
