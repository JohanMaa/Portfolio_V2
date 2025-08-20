import Head from 'next/head';
import LeftSidebar from '@/components/leftsidebar';
import RightSidebar from '@/components/rigthsidebar';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Home from '@/components/home';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import OtherProjects from '@/components/otherprojects';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="min-h-screen text-[#ccd6f6] font-inter">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <title>Johan - Portfolio</title>
      </Head>
      <LeftSidebar />
      <RightSidebar />
      <Navbar />
      <div className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        {/* About Section */}
        <section id="about" className="min-h-screen">
          <About />
        </section>
        {/* Experience Section */}
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        {/* Others Projects Section */}
        <section id="other-projects" className="min-h-screen">
          <OtherProjects />
        </section>
        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
        {/* Tambah section lain di sini kalau perlu */}
      </div>
      <Footer />
    </main>
  );
}