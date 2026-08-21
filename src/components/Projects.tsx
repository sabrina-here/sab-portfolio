'use client';

import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight, Flame, Code2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI & Web'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="section-subtitle flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Featured Engineering Work
          </div>
          <h2 className="section-title text-3xl sm:text-4xl">
            Projects & Technical Builds
          </h2>
          <p className="text-slateText-muted max-w-xl text-sm sm:text-base">
            Live web applications showcasing end-to-end frontend craft, state synchronization, backend API integrations, and database schemas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-midnight-950/80 border border-midnight-border self-start md:self-auto">
          {(['All', 'Full-Stack', 'AI & Web'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slateText-muted hover:text-slateText-primary'
              }`}
            >
              {cat === 'All' ? 'All Builds' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isUpcoming = project.status === 'Currently Building';

  return (
    <div
      className={`midnight-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${
        isUpcoming ? 'border-accent/30 bg-midnight-950/60' : ''
      }`}
    >
      {/* Top Banner & Badge */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30">
              {project.category}
            </span>
            {isUpcoming && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Flame className="w-3.5 h-3.5 animate-bounce" />
                {project.status}
              </span>
            )}
          </div>

          {!isUpcoming && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slateText-muted hover:text-accent group-hover:text-accent transition-colors"
            >
              <span>Live Application</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-1.5 mb-4">
          <h3 className="text-2xl font-bold text-slateText-primary group-hover:text-accent transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-accent/90">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slateText-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slateText-muted flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span>Key Engineering Highlights</span>
          </div>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slateText-secondary">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 opacity-85" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Actions */}
      <div className="pt-6 border-t border-midnight-border space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-slateText-muted bg-midnight-950 border border-midnight-border/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div>
          {!isUpcoming ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-midnight-800 border border-midnight-border text-slateText-primary hover:border-accent hover:text-accent hover:bg-accent/5 font-semibold text-sm transition-all duration-200"
            >
              <span>Visit Live Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="w-full py-3 rounded-xl bg-midnight-950/60 border border-dashed border-midnight-border text-slateText-muted text-center text-xs font-mono">
              ⚡ Actively in progress • Full-Stack Stack (Next.js 14 + Postgres + Prisma)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
