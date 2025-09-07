import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-6 bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-[#111827] flex items-center">
          <span className="text-[#7C3AED] font-mono text-lg mr-2">01.</span>
          About Me
        </h2>
        <div className="flex-1 h-px bg-[#4B5563] ml-5"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Image */}
        <div className="md:col-span-1 relative w-64 mx-auto md:mx-0">
          <div className="rounded bg-[#7C3AED] absolute -top-4 -left-4 w-full h-full z-0 opacity-20"></div>
          <img
            src="/j.jpeg"
            alt="Johan Maulana"
            className="relative rounded shadow-lg z-10"
          />
        </div>
        {/* Text */}
        <div className="md:col-span-2 text-[#4B5563] space-y-4 font-open-sans">
          <p>
            Hello! My name is Johan, and I love crafting digital solutions that thrive online. My journey in web development began in 2012 when I experimented with custom Tumblr themes—little did I know that tweaking a reblog button would spark my passion for HTML &amp; CSS!
          </p>
          <p>
            Today, I’ve had the opportunity to work at <a href="#" className="text-[#7C3AED] hover:underline">an advertising agency</a>, 
            <a href="#" className="text-[#7C3AED] hover:underline">a start-up</a>, 
            <a href="#" className="text-[#7C3AED] hover:underline">a major corporation</a>, and 
            <a href="#" className="text-[#7C3AED] hover:underline">a student-led design studio</a>. Currently, I’m dedicated to developing accessible and inclusive web products at <a href="#" className="text-[#7C3AED] hover:underline">Upstatement</a>.
          </p>
          <p>
            Recently, I <a href="#" className="text-[#7C3AED] hover:underline">launched a course</a> teaching how to build web apps with the Spotify API using Node.js and React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-[#4B5563]">
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">JavaScript (ES6+)</li>
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">TypeScript</li>
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">React</li>
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">Eleventy</li>
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">Node.js</li>
            <li className="before:content-['▹'] before:text-[#7C3AED] before:mr-2">WordPress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;