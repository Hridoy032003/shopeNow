 "use client"
 import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"; // Import the useUser hook
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import GlobalCart from "./GlobalCart";

interface cart{
  name:string;
  price:number;
  quantity:number;
  id:number;
  imageUrl:string;

}

const Navbar = () => {
  const { user } = useUser(); 
  const [cart, setCart] = useState<cart[]>([]);
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
          <Link href="/products" className="link">
            About
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </div>
        <div className="flex gap-5 items-center ">
          {user ? (
            <>
              <p>Welcome, {user.firstName || user.username}</p>{" "}
              {/* Access the user's first name or username */}
              <div className="relative">
              <GlobalCart/>
                 
                
              </div>
            </>
          ) : (
            <div className="flex gap-5">
              <SignedOut>
               
                <SignInButton>
                  <Button variant="default">
                    Sign In 
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;