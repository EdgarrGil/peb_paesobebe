"use client";
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition">
            PaEsoBebe
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-300 font-medium hover:text-[var(--primary)] transition">
            Home
          </Link>
          <Link href="/contact" className="text-gray-300 font-medium hover:text-[var(--primary)] transition">
            Contact
          </Link>
          <Link href="/about" className="text-gray-300 font-medium hover:text-[var(--primary)] transition">
            About
          </Link>
          <Link href="/advertising" className="text-gray-300 font-medium hover:text-[var(--primary)] transition">
            Advertise
          </Link>
          <Link href="/upload" className="btn-primary">
            UPLOAD
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-3 border-t border-zinc-800">
          <div className="flex flex-col space-y-3 px-4">
            <Link href="/" className="text-gray-300 font-medium hover:text-[var(--primary)] transition py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-300 font-medium hover:text-[var(--primary)] transition py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-gray-300 font-medium hover:text-[var(--primary)] transition py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/videos" className="text-gray-300 font-medium hover:text-[var(--primary)] transition py-2" onClick={() => setIsOpen(false)}>
              Videos
            </Link>
            <Link href="/upload" className="btn-primary w-full text-left" onClick={() => setIsOpen(false)}>
              UPLOAD
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 