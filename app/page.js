"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex pt-16">
        <Sidebar isOpen={isOpen} />

        <main className="flex-1 p-4 lg:ml-64">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
        </main>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
