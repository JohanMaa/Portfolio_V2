"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import LeftSidebar from "@/components/leftsidebar";
import RightSidebar from "@/components/rigthsidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import OtherProjects from "@/components/otherprojects";
import Contact from "@/components/contact";
import { urlFor } from "../sanityClient";
import LayoutClient from "./layout-client";

const SectionRenderer = ({ section }) => {
  const props = {
    title: section.title || "",
    content: section.content || "",
    image: section.image ? urlFor(section.image).url() : null,
  };

  return (
    <section className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#111827] mb-6">{props.title}</h2>
        <p className="text-[#4B5563]">{props.content}</p>
        {props.image && (
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-auto mt-4 rounded-lg"
          />
        )}
      </div>
    </section>
  );
};

const getSectionClass = (id) => {
  switch (id) {
    case "home":
      return "min-h-screen";
    case "about":
    case "experience":
    case "projects":
    case "other-projects":
    case "contact":
      return "min-h-screen";
    case "blog":
      return "min-h-screen flex items-center justify-center";
    default:
      return "min-h-screen";
  }
};

export default function Page() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/api/sanity")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data dari API:", data);
        const sorted = [...data].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
        setSections(sorted);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const staticSections = [
    { id: "home", order: 1, component: <Home /> },
    { id: "about", order: 2, component: <About /> },
    { id: "experience", order: 3, component: <Experience /> },
    { id: "projects", order: 4, component: <Projects /> },
    { id: "other-projects", order: 5, component: <OtherProjects /> },
    { id: "contact", order: 7, component: <Contact /> },
  ];

  const combinedSections = [...staticSections, ...sections].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <LayoutClient>
      <main className="min-h-screen text-[#111827] font-inter">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          />
          <title>Johan - Portfolio</title>
        </Head>

        <LeftSidebar />
        <RightSidebar />
        <Navbar />
        <div className="pt-16">
          {combinedSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={getSectionClass(section.id)}
            >
              <div className="container mx-auto">
                {"component" in section ? section.component : <SectionRenderer section={section} />}
              </div>
            </section>
          ))}
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
}