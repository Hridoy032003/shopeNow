"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trendingProductsWithPrice } from "@/data/trandingProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ecommerceFAQ } from "@/data/commonData";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  salePrice: number | null;
  onSale: boolean;
  imageUrl: string;
}
interface fanq {
  question: string;
  answer: string;
}

const images = [
  "/pexels-tima-miroshnichenko-6693161.jpg",
  "/pexels-godisable-jacob-226636-923210.jpg",
  "/pexels-royalanwar-983497.jpg",
  "/pexels-mart-production-9558713.jpg",
];
export default function Home() {
  const [image, setImage] = useState<string>("");
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [faq, setFaq] = useState<fanq[]>([]);



  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setImage(randomImage);
    }, 1000);

    return () => clearInterval(interval);
  }, [image]);
  useEffect(() => {
    try {
      setTrendingProducts(trendingProductsWithPrice);
      setFaq(ecommerceFAQ);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full relative">
        <Image
          src={image || "/pexels-mart-production-9558713.jpg"}
          alt="hero"
          width={1000}
          height={1000}
          className="  object-center   z-0 opacity-50 h-full w-full absolute"
        />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] gap-3 relative z-10">
          <h1 className="gradient-text gradient-from-blue-500 gradient-to-purple-500 text-4xl font-bold">
            Buy The best{" "}
          </h1>
          <p className="text-md text-gray-500">
            Get the best products at the best price
          </p>
          <Button className="mt-4 cursor-pointer">Get Started</Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-between mt-20 p-10">
        <h1 className="text-4xl font-bold mb-5">Categories</h1>
        <div className="flex flex-row gap-4 justify-between">
          <Link href="/men" className="w-full h-full group">
            <Card className="w-full h-full relative">
              <Image
                src="/pexels-jansel-ferma-306295-2315303.jpg"
                alt="men"
                width={1000}
                height={1000}
                className="w-full h-full object-cover p-10 transition-all duration-300 group-hover:blur-xs group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-5xl font-bold"> For Men</p>
              </div>
            </Card>
          </Link>
          <Link href="/women" className="w-full h-full group">
            <Card className="w-full h-full relative">
              <Image
                src="/max-titov-Mhktr6dFD3I-unsplash.jpg"
                alt="women"
                width={1000}
                height={1000}
                className="w-full h-full object-cover p-10 transition-all duration-300 group-hover:blur-xs group-hover:scale-105"
              />{" "}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-4xl font-bold">For Women</p>
              </div>
            </Card>
          </Link>
          <Link href="/kids" className="w-full h-full group">
            <Card className="w-full h-full relative">
              <Image
                src="/hamid-tajik-WnaTXcwF9CA-unsplash.jpg"
                alt="kids"
                width={1000}
                height={1000}
                className="w-full h-full object-cover p-10 transition-all duration-300 group-hover:blur-xs group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-4xl font-bold">For Kids</p>
              </div>
            </Card>
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-between mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">Trending Products</h1>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {/* --- THIS IS THE CORRECTED LOOP --- */}
              {trendingProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-10">
                    <Card className="overflow-hidden">
                      <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                          <Image
                            src="/pexels-mart-production-9558713.jpg"
                            alt={product.name}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg text-center h-12">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-4">
                          {product.onSale && product.salePrice && (
                            <p className="text-xl font-bold text-red-600">
                              ${product.salePrice.toFixed(2)}
                            </p>
                          )}
                          <p
                            className={`text-lg ${
                              product.onSale
                                ? "line-through text-gray-500"
                                : "font-bold"
                            }`}
                          >
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <Button className="mt-2 w-full">View Product</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col gap-5   p-10 items-center justify-center min-h-[500px] px-50 bg-gray-100">
        <h1 className="text-4xl font-bold mb-5">Suscribe to our newsletter</h1>
        <p className="text-md text-gray-500">Get the latest news and updates</p>
        <div className="flex flex-row gap-4 justify-between w-full p-10 bg-white rounded-md">
          <p className="text-md text-gray-500">
            Enter your email to get the latest news and updates
          </p>
          <Input type="email" placeholder="Email" className="w-full" />
          <Button className="">Suscribe</Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-10 px-70 mt-20">
        <h1 className="text-2xl mb-5">Most Asked Questions</h1>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map((item) => (
            <AccordionItem value={item.question} key={item.question}>
              <AccordionTrigger className="text-lg ">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-md">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
