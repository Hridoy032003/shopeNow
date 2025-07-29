"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
const Navbar = () => {
  const [user, setUser] = useState<string | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-5 shadow-md shadow-black/10">
        <div className="text-2xl font-bold">
          <Link href="/">ShopNow</Link>
        </div>
        <div className="flex gap-5 fixed left-1/2 -translate-x-1/2">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </div>
        <div className="flex gap-5 items-center ">
          {user ? (
            <>
              <p>Welcome, {user}</p>
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
              <Button variant="outline" onClick={() => setUser(null)}>
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={() => setUser("user")}>Login</Button>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="absolute p-100 bg-black">
          <h1>Cart</h1>
        </div>
      )}
    </div>
  );
};
export default Navbar;
