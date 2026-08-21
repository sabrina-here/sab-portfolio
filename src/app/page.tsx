'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { EducationDSA } from '@/components/EducationDSA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-midnight-900 text-slateText-primary relative selection:bg-accent selection:text-white">
      {/* Top sticky navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main page content sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Projects />
        <Experience />
        <Skills />
        <EducationDSA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Formatted Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
