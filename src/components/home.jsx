import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-start pt-1 lg:pl-1">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#64ffda] text-sm font-mono mb-4 animate-fade-in">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Johan Maulana.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I build things for the web.
          </h2>
          <p className="text-[#8892b0] max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I'm a software developer based in Jakarta, specializing in building and designing exceptional digital experiences. Currently, I'm focused on creating accessible, user-friendly web applications.
          </p>
          <a
            href="#projects"
            className="btn-outline animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            Check out my projects!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;