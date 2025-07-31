import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <CartProvider>
            <main className="flex min-h-screen flex-col px-50">{children}</main>
          </CartProvider>
        </ClerkProvider>
   
      </body>
    </html>
  );
}
