'use client';

import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SABRINA KHAN
Frontend Developer & Aspiring Full-Stack Developer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}
GitHub: ${PERSONAL_INFO.socials.github}
LeetCode: ${PERSONAL_INFO.socials.leetcode} (50+ Solved)
Codeforces: ${PERSONAL_INFO.socials.codeforces} (50+ Solved)

SUMMARY:
${PERSONAL_INFO.longBio}

EXPERIENCE:
- Junior Frontend Developer | Genie Info Tech (Aug 2025 – Present)
  Next.js, TypeScript, Redux Toolkit, MUI. Large delivery management system for Denmark logistics client.
- Frontend Developer Intern | Genie Info Tech (May 2025 – Aug 2025)
  React, TypeScript, Redux, Tailwind CSS, MUI.

EDUCATION:
- B.Sc. in Computer Science and Engineering | Primeasia University (Graduated Jan 2025) - CGPA: 3.90/4.00
- HSC: Shaheed Bir Uttam Lt. Anwar Girls College (2020) - GPA: 5.00/5.00
- SSC: Banani Bidyaniketan School and College (2018) - GPA: 5.00/5.00

PROJECTS:
1. QuizzingBuddy (AI Quiz Platform): https://quizzingbuddy.web.app/
2. Shoe Resale (P2P Marketplace): https://shoe-resale-3e39f.web.app/
3. MachBazar (Fish E-Commerce): https://machbazar-89a98.web.app/

SKILLS:
- Frontend: React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, Tailwind CSS, Material UI, Bootstrap
- Backend: Node.js, Express.js, MongoDB, Firebase Auth & Firestore, RESTful APIs
- Core CS: C++, C, Python, DSA, OOP, Problem Solving
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-midnight-950 border border-midnight-border rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-midnight-border bg-midnight-900/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            <h2 className="text-base font-bold text-slateText-primary">
              Sabrina Khan — Professional Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-800 border border-midnight-border text-xs font-mono text-slateText-secondary hover:text-accent hover:border-accent transition-colors"
              title="Copy as plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-800 border border-midnight-border text-xs font-mono text-slateText-secondary hover:text-accent hover:border-accent transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-midnight-800 hover:bg-midnight-700 text-slateText-muted hover:text-slateText-primary transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slateText-secondary text-sm">
          {/* Resume Header */}
          <div className="border-b border-midnight-border pb-6 space-y-3">
            <h1 className="text-3xl font-extrabold text-slateText-primary tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-accent">
              Frontend Developer & Aspiring Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slateText-muted">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-accent" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {PERSONAL_INFO.location}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-mono pt-1 text-slateText-muted">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline">
                GitHub Profile
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline">
                LeetCode (50+)
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.codeforces} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline">
                Codeforces (50+)
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              Summary
            </h3>
            <p className="leading-relaxed text-slateText-secondary">
              {PERSONAL_INFO.longBio}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-slateText-primary text-base">
                      {exp.role} — <span className="text-slateText-secondary font-medium">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-slateText-muted">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slateText-muted leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slateText-secondary pl-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.filter(p => !p.status).map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slateText-primary">
                      {proj.title} <span className="text-xs font-normal text-slateText-muted">({proj.category})</span>
                    </div>
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent underline">
                      {proj.liveUrl.replace('https://', '')}
                    </a>
                  </div>
                  <p className="text-xs text-slateText-secondary">{proj.description}</p>
                  <div className="text-[11px] font-mono text-slateText-muted">
                    Stack: {proj.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-slateText-primary block">Frontend Technologies:</span>
                <span className="text-slateText-muted">React.js, Next.js, TypeScript, JavaScript (ES6+), Redux, Tailwind CSS, Material UI, Bootstrap</span>
              </div>
              <div>
                <span className="font-semibold text-slateText-primary block">Backend & Database:</span>
                <span className="text-slateText-muted">Node.js, Express.js, MongoDB, Firebase Authentication & Firestore, REST APIs</span>
              </div>
              <div>
                <span className="font-semibold text-slateText-primary block">Languages:</span>
                <span className="text-slateText-muted">JavaScript, TypeScript, C++, C, Python</span>
              </div>
              <div>
                <span className="font-semibold text-slateText-primary block">Tools & Methods:</span>
                <span className="text-slateText-muted">Git, GitHub, AI Dev Optimization, Postman, Vite, Data Structures & Algorithms</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slateText-primary">{edu.degree}</span>
                    <div className="text-slateText-muted">{edu.institution}</div>
                  </div>
                  <div className="text-left sm:text-right font-mono mt-1 sm:mt-0">
                    <span className="font-bold text-accent">{edu.grade}</span>
                    <div className="text-slateText-muted">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
