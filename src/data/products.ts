export interface Product {
  id: number;
  name: string;
  price: number;
  category: "Men" | "Women" | "Kids";
  type: string;
  discount?: number;
  description: string;
  salePrice?: number;
  onSale?: boolean;
  imageUrl: string;
  rating: number;
  reviews: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    category: "Men",
    type: "T-Shirt",
    discount: 15,
    description: "Premium cotton classic white t-shirt with comfortable fit",
    salePrice: 25.49,
    onSale: true,
    imageUrl: "/alireza-esmaeeli-ztx7ouxBPyg-unsplash.jpg",
    rating: 4.5,
    reviews: 128,
    stock: 50,
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    type: "Jacket",
    description: "Vintage style denim jacket with modern fit",
    imageUrl: "/hamid-tajik-WnaTXcwF9CA-unsplash.jpg",
    rating: 4.3,
    reviews: 89,
    stock: 25,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 79.99,
    category: "Men",
    type: "Shoes",
    discount: 20,
    description: "Comfortable casual sneakers for everyday wear",
    salePrice: 63.99,
    onSale: true,
    imageUrl: "/max-titov-Mhktr6dFD3I-unsplash.jpg",
    rating: 4.7,
    reviews: 156,
    stock: 40,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 59.99,
    category: "Women",
    type: "Dress",
    description: "Light and breezy summer dress perfect for warm days",
    imageUrl: "/pexels-godisable-jacob-226636-923210.jpg",
    rating: 4.6,
    reviews: 203,
    stock: 35,
    isNew: true,
    isTrending: true,
  },
  {
    id: 5,
    name: "High-Waist Jeans",
    price: 69.99,
    category: "Women",
    type: "Jeans",
    discount: 10,
    description: "Stylish high-waist jeans with perfect stretch",
    salePrice: 62.99,
    onSale: true,
    imageUrl: "/pexels-godisable-jacob-226636-952630.jpg",
    rating: 4.4,
    reviews: 167,
    stock: 30,
    isPopular: true,
  },
  {
    id: 6,
    name: "Kids Hoodie",
    price: 39.99,
    category: "Kids",
    type: "Hoodie",
    description: "Warm and cozy hoodie for kids with fun design",
    imageUrl: "/pexels-jansel-ferma-306295-2315303.jpg",
    rating: 4.8,
    reviews: 94,
    stock: 45,
    isFeatured: true,
  },
  {
    id: 7,
    name: "Formal Shirt",
    price: 49.99,
    category: "Men",
    type: "Shirt",
    description: "Professional formal shirt for business meetings",
    imageUrl: "/pexels-mart-production-9558713.jpg",
    rating: 4.2,
    reviews: 78,
    stock: 20,
  },
  {
    id: 8,
    name: "Winter Coat",
    price: 129.99,
    category: "Women",
    type: "Coat",
    discount: 25,
    description: "Warm winter coat with faux fur collar",
    salePrice: 97.49,
    onSale: true,
    imageUrl: "/pexels-royalanwar-983497.jpg",
    rating: 4.9,
    reviews: 234,
    stock: 15,
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Kids Sneakers",
    price: 34.99,
    category: "Kids",
    type: "Shoes",
    description: "Comfortable and durable sneakers for active kids",
    imageUrl: "/pexels-tima-miroshnichenko-6693161.jpg",
    rating: 4.6,
    reviews: 112,
    stock: 60,
    isPopular: true,
  },
];
