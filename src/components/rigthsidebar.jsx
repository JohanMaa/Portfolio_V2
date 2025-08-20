import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block fixed right-0 bottom-0 w-20 z-20">
      <div className="flex flex-col items-center justify-end h-full  mr-4"> {/* Tambah mr-4 untuk offset ke kiri */}
        {/* Email Vertikal */}
        <div className="vertical-rl text-[#a8b2d1] text-sm font-mono hover:text-[#64ffda] transition-colors duration-200">
          <a
            href="mailto:johan@example.com"
            aria-label="Email me"
            className="tracking-widest"
          >
            johanemaulana@gmail.com {/* Ganti dengan email Anda */}
          </a>
        </div>
        {/* Garis */}
        <div className="w-0.5 h-20 bg-[#ccd6f6]"></div>
      </div>
    </aside>
  );
};

export default RightSidebar;