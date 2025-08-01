"use client";
import React, { useState } from "react"; // Removed useEffect as it's not needed here
import {
  House,
  User,
  PackageCheck,
  Search,
  CreditCard,
  LogOut,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import HomeComponent from "./components/HomeComponent";
import ProductComponentAdd from "./components/ProductComponentAdd";
import BillingComponent from "./components/BillingComponent";




const UserComponent = () => (
  <div className="p-4">
    <h1>User Management</h1>
  </div>
);

const SearchComponent = () => (
  <div className="p-4">
    <h1>Search</h1>
  </div>
);


const menuItems = [
  {
    title: "Home",
    icon: House,
    component: HomeComponent,
  },
  {
    title: "User",
    icon: User,
    component: UserComponent,
  },
  {
    title: "Product-order",
    icon: PackageCheck,
    component: ProductComponentAdd, // Make sure all items have a component
  },
  {
    title: "Search",
    icon: Search,
    component: SearchComponent,
  },
  {
    title: "Billing",
    icon: CreditCard,
    component: BillingComponent,
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);


  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  const ActiveComponent = menuItems[activeIndex]?.component;

  return (
    <div className="flex flex-row scroll-none  ">
      <div className="bg-white min-h-screen p-5 flex flex-col gap-4 text-gray-500 w-1/5 border-r justify-between">
        <div className="flex flex-col gap-5 mt-5">
          {menuItems.map((item, index) => (
          <div key={index}>
            <button
              key={item.title}
              className={`flex items-center gap-4 w-full text-left p-2 rounded-md transition-colors ${
                activeIndex === index
                  ? "bg-gray-100 text-gray-500"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleMenuClick(index)}
            >
              <item.icon />
              <span className="font-medium">{item.title}</span>
            </button>
            <Separator className="bg-gray-200 mt-2" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t mb-20">
          <Button variant="ghost" className="justify-start gap-4">
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
      <div className="w-4/5 p-4">

        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default Page;
