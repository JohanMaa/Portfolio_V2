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
      "Developed UI components for internal tools with optimized performance.",
      "Enhanced global web app efficiency for employee use.",
    ],
  },
  {
    company: "Scout Studio",
    role: "Developer",
    url: "#",
    start: "Sep 2014",
    end: "Dec 2015",
    points: ["Constructed websites for student-led initiatives.", "Managed studio portfolio site maintenance."],
  },
  {
    company: "Starry",
    role: "Software Engineer",
    url: "#",
    start: "Jan 2013",
    end: "Aug 2014",
    points: ["Engineered wireless networking tools for connectivity.", "Designed user onboarding workflows."],
  },
  {
    company: "MullenLowe",
    role: "Intern Developer",
    url: "#",
    start: "Jun 2012",
    end: "Dec 2012",
    points: ["Supported development of ad campaign websites."],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="max-w-5xl mx-auto py-20 px-6 bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-[#111827] flex items-center">
          <span className="text-[#7C3AED] font-mono text-lg mr-2">02.</span>
          Where I’ve Worked
        </h2>
        <div className="flex-1 h-px bg-[#4B5563] ml-5"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l border-[#4B5563]">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-left font-mono text-sm whitespace-nowrap hover:bg-[#F9FAFB]/80 transition-colors border-l-2 ${
                activeIndex === idx
                  ? "text-[#7C3AED] border-[#7C3AED] bg-[#F9FAFB]/80"
                  : "text-[#4B5563] border-transparent"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Details */}
        <div className="md:col-span-3 text-[#4B5563]">
          <h3 className="text-lg font-semibold text-[#111827]">
            {experiences[activeIndex].role}{" "}
            <a
              href={experiences[activeIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C3AED] hover:underline"
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
                className="flex items-start before:content-['▹'] before:text-[#7C3AED] before:mr-2"
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