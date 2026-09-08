"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Academy<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-900 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="/programs"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Training Programs
          </a>

          <a
            href="/contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>

          <a
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="/" className="font-medium text-slate-900">
              Home
            </a>

            <a href="/about" className="font-medium text-slate-600">
              About
            </a>

            <a href="/programs" className="font-medium text-slate-600">
              Training Programs
            </a>

            <a href="/contact" className="font-medium text-slate-600">
              Contact
            </a>

            <a
              href="/contact"
              className="rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}