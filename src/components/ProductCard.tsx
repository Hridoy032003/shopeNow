"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, state } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  const isInCart = () => {
    return state.items.some((item) => item.id === product.id);
  };

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        {product.onSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            {product.discount}% OFF
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">
            NEW
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-1">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          {product.onSale ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ${product.salePrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold">${product.price}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
          <Button
            onClick={handleAddToCart}
            disabled={isInCart()}
            className={isInCart() ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {isInCart() ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
