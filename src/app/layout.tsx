import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Bienvenido a mi portafolio personal. Soy Christian Tobar, especialista en la Angular con pasión por [una pasión relevante a tu campo]. Descubre mis proyectos destacados, habilidades y la experiencia que me hace único en [tu campo/industria].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
