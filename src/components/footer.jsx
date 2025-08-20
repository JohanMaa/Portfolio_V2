import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] py-6 text-center text-[#a8b2d1] text-sm">
      <div className="mb-2">
        <span>Inspired by </span>
        <a href="https://brittanychiang.com" className="text-[#64ffda] hover:underline">
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