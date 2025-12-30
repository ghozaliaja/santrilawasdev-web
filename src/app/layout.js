import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: "Santri Lawas Dev | Jasa Pembuatan Website & Aplikasi Murah",
  description: "Jasa bikin website sekolah, toko online, dan aplikasi Android. Harga santri, kualitas mumpuni. Melayani seluruh Indonesia.",
  keywords: "jasa web murah, buat website sekolah, aplikasi android murah, web developer santri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark text-gray-300 antialiased selection:bg-primary selection:text-white`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}