import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,

} from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const AdminNav = () => {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md shadow-black/10">
      <div className="text-2xl font-bold">
        <Link href="/admin">ShopNow Admin Dashboard</Link>
      </div>
      <div className="flex gap-2 ">
        <Input type="text" placeholder="Search" />

        <SignedIn>
          <Avatar>
            <UserButton />
         
          </Avatar>
        </SignedIn>
      </div>
    </nav>
  );
};

export default AdminNav;
