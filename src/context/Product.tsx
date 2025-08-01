"use client"
import { createContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";

const ProductContext = createContext<any>(null);

const PostProduct = async (productData: any) => {
try {
    const response = await axios.post('/api/adminRoutes/createProduct', productData);
    console.log(response.data);
       toast.success("Product added successfully!",{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
    return response.data;
} catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Product added successfully",  error: error });
}
}

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const productsQuery = useMutation({
        mutationFn: PostProduct,
        onSuccess: (data) => {
            console.log('Product added successfully:', data);
            
        },
        onError: (error) => {
            console.error('Error adding product:', error);
        }
    });

    return (
        <ProductContext.Provider value={{ productsQuery }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;