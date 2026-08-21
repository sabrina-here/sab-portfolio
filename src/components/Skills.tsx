'use client';

import React from 'react';
import { Code, Server, Cpu, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    if (name.includes('Frontend')) return <Code className="w-5 h-5 text-accent" />;
    if (name.includes('Backend')) return <Server className="w-5 h-5 text-accent" />;
    if (name.includes('Computer Science')) return <Cpu className="w-5 h-5 text-accent" />;
    return <Wrench className="w-5 h-5 text-accent" />;
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-midnight-border/50">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="section-subtitle flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Technical Capabilities
        </div>
        <h2 className="section-title text-3xl sm:text-4xl">
          Skills & Technologies
        </h2>
        <p className="text-slateText-muted max-w-2xl text-sm sm:text-base">
          A comprehensive toolkit spanning modern client-side architectures, server-side REST API development, database management, and computer science fundamentals.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="midnight-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border">
                  {getCategoryIcon(category.name)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slateText-primary">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slateText-muted mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-midnight-950/80 border border-midnight-border/90 hover:border-accent/40 hover:bg-midnight-800/80 transition-all flex flex-col justify-between group"
                  >
                    <span className="text-sm font-semibold text-slateText-primary group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slateText-muted mt-1.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70"></span>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle bottom highlight */}
            <div className="mt-6 pt-4 border-t border-midnight-border/60 flex items-center justify-between text-xs font-mono text-slateText-muted">
              <span>{category.skills.length} core competencies</span>
              <span className="text-accent">Production Ready</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
