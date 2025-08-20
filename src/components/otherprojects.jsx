"use client";

import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiOutlineFolder } from "react-icons/hi";
import otherProjects from "@/data/otherProjectsData";

const OtherProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, 6);

  return (
    <section id="other-projects" className="max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#ccd6f6]">
          Other Noteworthy Projects
        </h2>
        <a
          href="#"
          className="text-[#64ffda] text-sm font-mono hover:underline"
        >
          view the archive
        </a>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#112240] rounded-lg p-6 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Icons */}
            <div className="flex justify-between items-start mb-6">
              <HiOutlineFolder size={40} className="text-[#64ffda]" />
              <div className="flex space-x-4 text-[#ccd6f6]">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#64ffda]"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href={proj.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#64ffda]"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-[#ccd6f6] mb-2">
              {proj.title}
            </h3>
            <p className="text-[#8892b0] text-sm mb-4">{proj.description}</p>

            {/* Tech */}
            <ul className="flex flex-wrap font-mono text-xs text-[#8892b0] mt-auto">
              {proj.tech.map((t) => (
                <li key={t} className="mr-3 mb-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Show More/Show Less Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 font-mono text-sm transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default OtherProjects;