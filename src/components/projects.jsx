import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    image: "/images/halcyon.png", // ganti dengan path gambar kamu
    github: "#",
    external: "#",
    featured: true,
  },
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    image: "/images/spotify-profile.png",
    github: "#",
    external: "#",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="flex items-center mb-16">
        <h2 className="text-2xl font-bold text-[#ccd6f6] flex items-center">
          <span className="text-[#64ffda] font-mono text-lg mr-2">03.</span>
          Some Things I’ve Built
        </h2>
        <div className="flex-1 h-px bg-[#233554] ml-5"></div>
      </div>

      {/* Project List */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-6`}
          >
            {/* Image */}
            <div className="md:w-1/2 relative group">
              <img
                src={project.image}
                alt={project.title}
                className="rounded shadow-lg group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 relative z-10">
              <p className="text-[#64ffda] font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                {project.title}
              </h3>
              <div className="bg-[#112240] p-6 rounded-md shadow-lg mb-4">
                <p className="text-[#8892b0]">{project.description}</p>
              </div>
              <ul className="flex flex-wrap font-mono text-xs text-[#8892b0] mb-4">
                {project.tech.map((t) => (
                  <li key={t} className="mr-4 mb-2">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda]"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda]"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
