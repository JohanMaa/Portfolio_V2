"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "bg-[rgba(10,25,47,0.85)] shadow-lg"
          : "bg-transparent"}`
      }
      style={{
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Safari support
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-mono text-[#a8b2d1]">
        {/* Logo di Kiri, digeser lebih ke kiri */}
        <Link
          href="#home"
          className="text-[#64ffda] text-xl font-mono hover:text-[#64ffda] transition-colors duration-200 ml-[-1rem]"
        >
          Johan
        </Link>

        {/* Menu di Kanan */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#about"
              className="flex items-center hover:text-[#64ffda] transition-colors duration-200"
            >
              <span className="text-[#64ffda] mr-2">01.</span> About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="flex items-center hover:text-[#64ffda] transition-colors duration-200"
            >
              <span className="text-[#64ffda] mr-2">02.</span> Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="flex items-center hover:text-[#64ffda] transition-colors duration-200"
            >
              <span className="text-[#64ffda] mr-2">03.</span> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="flex items-center hover:text-[#64ffda] transition-colors duration-200"
            >
              <span className="text-[#64ffda] mr-2">04.</span> Contact
            </Link>
          </li>
          <li>
            <Link
              href="/resume.pdf"
              className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-200"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;