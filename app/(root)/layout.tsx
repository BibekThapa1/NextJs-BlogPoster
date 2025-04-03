import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
