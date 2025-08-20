import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono text-lg mr-2">01.</span>
          About Me
        </h2>
        <div className="flex-1 h-px bg-[#233554] ml-5"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Text */}
        <div className="md:col-span-2 text-[#8892b0] space-y-4">
          <p>
            Hello! My name is Johan and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
          </p>
          <p>
            Fast-forward to today, I’ve had the privilege of working at <a href="#" className="text-[#64ffda] hover:underline">an advertising agency</a>, 
            <a href="#" className="text-[#64ffda] hover:underline"> a start-up</a>, 
            <a href="#" className="text-[#64ffda] hover:underline"> a huge corporation</a>, and 
            <a href="#" className="text-[#64ffda] hover:underline"> a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="#" className="text-[#64ffda] hover:underline">Upstatement</a>.
          </p>
          <p>
            I also recently <a href="#" className="text-[#64ffda] hover:underline">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          {/* Tech List */}
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">JavaScript (ES6+)</li>
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">TypeScript</li>
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">React</li>
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">Eleventy</li>
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">Node.js</li>
            <li className="before:content-['▹'] before:text-[#64ffda] before:mr-2">WordPress</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-64 mx-auto md:mx-0">
          <div className="rounded bg-[#64ffda] absolute -top-4 -left-4 w-full h-full z-0"></div>
          <img
            src="/j.jpeg"
            alt="Johan Maulana"
            className="relative rounded shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
