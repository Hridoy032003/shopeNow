import "./globals.css";
import { Providers } from "@/context/Providers";
import { Bounce, ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">    
      <body>
        <Providers>
          <main className="flex min-h-screen flex-col px-50">{children}</main>
        </Providers>
         <ToastContainer
         position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce} />
      </body>
    </html>
  );
}