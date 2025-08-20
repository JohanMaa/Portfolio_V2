import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 h-full w-16 z-20">
      <div className="flex flex-col items-center justify-end h-full pb-8 space-y-6">
        <a 
          href="https://github.com/johan" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
          aria-label="Visit my GitHub profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.93.68 1.88v2.79c0 .27.16.59.67.5A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
        <a 
          href="https://linkedin.com/in/johan" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
          aria-label="Visit my LinkedIn profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9.03h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.51v6.22zM5.34 7.47c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm1.78 13.98H3.56V9.03h3.56v12.42zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
          </svg>
        </a>
        <div className="w-0.5 h-16 bg-[#ccd6f6]"></div>
      </div>
    </aside>
  );
};

export default Sidebar;