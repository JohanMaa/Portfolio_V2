import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto text-center py-32 px-6"
    >
      {/* Subtitle */}
      <p className="text-[#64ffda] font-mono text-sm mb-4">
        04. What’s Next?
      </p>

      {/* Title */}
      <h2 className="text-4xl font-bold text-[#ccd6f6] mb-6">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-[#8892b0] mb-12 leading-relaxed">
        Although I’m not currently looking for any new opportunities,
        my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!
      </p>

      {/* Button */}
      <a
        href="mailto:youremail@example.com"
        className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 font-mono text-sm transition"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
