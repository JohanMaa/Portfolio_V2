import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto text-center py-32 px-6 bg-[#F9FAFB]"
    >
      {/* Subtitle */}
      <p className="text-[#7C3AED] font-mono text-sm mb-4">
        04. What’s Next?
      </p>

      {/* Title */}
      <h2 className="text-4xl font-bold text-[#111827] mb-6">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-[#4B5563] mb-12 leading-relaxed">
        Although I’m not currently looking for any new opportunities,
        my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!
      </p>

      {/* Button */}
      <a
        href="mailto:johanemaulana@gmail.com"
        className="btn-outline animate-fade-in"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;