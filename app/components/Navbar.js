import Image from "next/image";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 px-4 py-3 border-b bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
            <span className="hidden md:block ml-2 text-2xl font-bold">
              WhatBytes
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-2 h-10">
            <Image
              src="/images/avatar.png"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-medium text-lg">Rashmi Ranjan</span>
          </button>
          <button
            className="lg:hidden bg-gray-100 rounded-md px-2 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
