import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Kedai Rumah Duren",
  description: "Restoran otentik yang menyajikan berbagai macam olahan durian",
};

const DynamicComponent = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bg`}>
        <Navbar />
        {children}
        <DynamicComponent />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
