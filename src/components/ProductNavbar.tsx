"use client"
import React, { useState } from 'react'

import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

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
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className=" z-10 cursor-pointer"
          >
            <ShoppingCart className="w-15 h-15 z-0 relative" />

            <span className="text-sm bg-red-500 text-white rounded-full w-5 h-5 flex z-10 items-center justify-center -mt-8 ml-8 absolute opacity-100">
              0
            </span>
          </Button>
        </div>
      </nav>
    </div>      
  );
}

export default ProductNavbar