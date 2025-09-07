"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // signIn dihapus, hanya pakai signOut

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled
          ? "bg-[rgba(249,250,251,0.85)] shadow-lg"
          : "bg-transparent"}`}
      style={{
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-mono text-[#111827]">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[#7C3AED] text-xl font-mono hover:text-[#7C3AED] hover:scale-105 transition-all duration-200 ml-[-1rem]"
        >
          Johan
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href="#about"
              className="flex items-center hover:text-[#7C3AED] hover:scale-105 transition-all duration-200"
            >
              <span className="text-[#7C3AED] mr-2">01.</span> About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="flex items-center hover:text-[#7C3AED] hover:scale-105 transition-all duration-200"
            >
              <span className="text-[#7C3AED] mr-2">02.</span> Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="flex items-center hover:text-[#7C3AED] hover:scale-105 transition-all duration-200"
            >
              <span className="text-[#7C3AED] mr-2">03.</span> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="flex items-center hover:text-[#7C3AED] hover:scale-105 transition-all duration-200"
            >
              <span className="text-[#7C3AED] mr-2">04.</span> Contact
            </Link>
          </li>
          <li>
            <Link
              href="/resume.pdf"
              className="px-4 py-2 border border-[#7C3AED] text-[#7C3AED] rounded hover:bg-[#7C3AED]/10 hover:scale-105 transition-all duration-200"
            >
              Resume
            </Link>
          </li>
          {/* Tombol Login / Logout */}
          <li>
            {status === "loading" ? (
              <span className="px-4 py-2">Loading...</span>
            ) : session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 border border-[#7C3AED] text-[#7C3AED] rounded hover:bg-[#7C3AED]/10 hover:scale-105 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 border border-[#7C3AED] text-[#7C3AED] rounded hover:bg-[#7C3AED]/10 hover:scale-105 transition-all duration-200"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
