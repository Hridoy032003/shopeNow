import "./globals.css";
import Navbar from "@/components/Navbar";   
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col  px-50">
     
          {children}
        </main>
      </body>
    </html>
  );
}