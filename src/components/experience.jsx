"use client"
import React, { useState } from "react";

const experiences = [
  {
    company: "Upstatement",
    role: "Lead Engineer",
    url: "https://upstatement.com",
    start: "May 2018",
    end: "Present",
    points: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    company: "Apple",
    role: "Frontend Developer",
    url: "#",
    start: "Jan 2016",
    end: "Apr 2018",
    points: [
      "Worked on UI components for internal tools.",
      "Improved performance of web apps used globally by employees.",
    ],
  },
  {
    company: "Scout Studio",
    role: "Developer",
    url: "#",
    start: "Sep 2014",
    end: "Dec 2015",
    points: ["Built websites for student projects.", "Maintained studio portfolio site."],
  },
  {
    company: "Starry",
    role: "Software Engineer",
    url: "#",
    start: "Jan 2013",
    end: "Aug 2014",
    points: ["Developed wireless networking tools.", "Created user onboarding flows."],
  },
  {
    company: "MullenLowe",
    role: "Intern Developer",
    url: "#",
    start: "Jun 2012",
    end: "Dec 2012",
    points: ["Assisted in development of ad campaign sites."],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="max-w-5xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono text-lg mr-2">02.</span>
          Where I’ve Worked
        </h2>
        <div className="flex-1 h-px bg-[#233554] ml-5"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l border-[#233554]">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-left font-mono text-sm whitespace-nowrap hover:bg-[#112240] transition-colors border-l-2 ${
                activeIndex === idx
                  ? "text-[#64ffda] border-[#64ffda] bg-[#112240]"
                  : "text-[#8892b0] border-transparent"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Details */}
        <div className="md:col-span-3 text-[#8892b0]">
          <h3 className="text-lg font-semibold text-[#ccd6f6]">
            {experiences[activeIndex].role}{" "}
            <a
              href={experiences[activeIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:underline"
            >
              @ {experiences[activeIndex].company}
            </a>
          </h3>
          <p className="font-mono text-sm mb-4">
            {experiences[activeIndex].start} — {experiences[activeIndex].end}
          </p>
          <ul className="space-y-3">
            {experiences[activeIndex].points.map((point, i) => (
              <li
                key={i}
                className="flex items-start before:content-['▹'] before:text-[#64ffda] before:mr-2"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
