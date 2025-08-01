"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/Product";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ProductProvider>
            {children}
          </ProductProvider>
        </CartProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}