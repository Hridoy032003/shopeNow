 "use client"
 import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"; // Import the useUser hook
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

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
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center -mt-2 ml-2 absolute">
                    {cart.length} {/* Dynamic cart item count */}
                  </span>
                </Button>
                {isOpen && (
                  <div className="absolute top-12 right-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">Shopping Cart</h3>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    {cart.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Your cart is empty</p>
                      </div>
                    ) : (
                      <div>
                        {cart.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 py-2 border-b"
                          >
                            <div className="w-12 h-12 bg-gray-200 rounded"></div>
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                ${item.price}
                              </p>
                            </div>
                            <button className="text-red-500">Remove</button>
                          </div>
                        ))}
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>
                              $
                              {cart
                                .reduce((sum, item) => sum + item.price, 0)
                                .toFixed(2)}
                            </span>
                          </div>
                          <Button className="w-full mt-3">Checkout</Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
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