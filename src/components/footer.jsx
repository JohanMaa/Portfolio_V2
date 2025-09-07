import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] py-6 text-center text-[#4B5563] text-sm ">
      <div className="mb-2">
        <span>Inspired by </span>
        <a href="https://brittanychiang.com" className="text-[#7C3AED] hover:underline hover:scale-105 transition-transform duration-200">
          Brittany Chiang
        </a>
      </div>
      <div>
        <span>&copy; {new Date().getFullYear()} Johan Maulana. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;