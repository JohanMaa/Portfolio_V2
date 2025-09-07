import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block fixed right-0 bottom-0 w-20 z-20">
      <div className="flex flex-col items-center justify-end h-full mr-4">
        {/* Email Vertikal */}
        <div className="vertical-rl text-[#4B5563] text-sm font-mono hover:text-[#7C3AED] transition-colors duration-200">
          <a
            href="mailto:johan@example.com"
            aria-label="Email me"
            className="tracking-widest"
          >
            johanemaulana@gmail.com
          </a>
        </div>
        {/* Garis */}
        <div className="w-0.5 h-20 bg-[#4B5563]"></div>
      </div>
    </aside>
  );
};

export default RightSidebar;