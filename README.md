# E-Commerce Store with Cart Functionality

A modern e-commerce store built with Next.js, TypeScript, and Tailwind CSS featuring a comprehensive cart system.

## Features

### 🛒 Cart Functionality

- **Add to Cart**: Click "Add to Cart" on any product to add it to your cart
- **Cart Counter**: Real-time cart item count displayed in the navigation bar
- **Cart Modal**: Click the cart icon to view your cart items
- **Quantity Management**: Increase/decrease quantity or remove items from cart
- **Total Calculation**: Automatic calculation of cart total
- **Persistent State**: Cart state is maintained across page navigation

### 🎯 Product Features

- **Category Filtering**: Filter products by Men, Women, or Kids categories
- **Product Details**: View product images, descriptions, ratings, and prices
- **Sale Items**: Special pricing and discount badges for sale items
- **Stock Information**: Real-time stock availability
- **Responsive Design**: Mobile-friendly product grid

### 🎨 UI Components

- **Modern Design**: Clean, responsive interface with hover effects
- **Product Cards**: Beautiful product cards with image, details, and action buttons
- **Cart Modal**: Elegant cart overlay with item management
- **Navigation**: Consistent navigation with cart integration

## How to Use

### Adding Items to Cart

1. Navigate to the Products page (`/products`)
2. Browse products by category using the dropdown
3. Click "Add to Cart" on any product
4. The button will change to "Added to Cart" and the cart counter will update

### Managing Cart

1. Click the cart icon in the navigation bar
2. View all items in your cart
3. Use the +/- buttons to adjust quantities
4. Click the trash icon to remove items
5. View the total at the bottom of the cart
6. Click "Proceed to Checkout" or "Continue Shopping"

### Navigation

- **Home**: Landing page with featured products and categories
- **Products**: Browse all products with filtering options
- **Cart**: Access cart from any page via the navigation bar

## Technical Implementation

### Cart Context

The cart functionality is implemented using React Context API:

- `CartContext.tsx`: Manages global cart state
- `useCart()`: Hook for accessing cart functionality
- Cart state includes items, total, and item count

### Components

- `ProductCard.tsx`: Reusable product display component
- `Cart.tsx`: Cart modal with item management
- `ProductNavbar.tsx`: Navigation with cart integration
- `ProductsPage.tsx`: Main products listing page

### Data Structure

Products are defined in `data/products.ts` with:

- Product information (name, price, description)
- Category classification (Men, Women, Kids)
- Sale information (discount, sale price)
- Stock and rating data

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cart Features in Detail

### Add to Cart

- Products can be added to cart from the products page
- Duplicate items increase quantity instead of creating new entries
- Visual feedback shows when items are added

### Cart Management

- **Quantity Controls**: +/- buttons to adjust item quantities
- **Remove Items**: Trash icon to completely remove items
- **Total Calculation**: Automatic price calculation including sale prices
- **Empty State**: Helpful message when cart is empty

### Cart Persistence

- Cart state is maintained during navigation
- Cart counter updates in real-time
- Modal can be opened from any page

## Future Enhancements

- **Local Storage**: Persist cart data across browser sessions
- **Checkout Process**: Complete checkout flow
- **User Accounts**: User authentication and saved carts
- **Wishlist**: Save items for later
- **Product Search**: Search functionality
- **Product Details**: Individual product pages
- **Order History**: Track past orders

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React Context**: State management
- **Shadcn/ui**: Modern UI components
