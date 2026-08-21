'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-midnight-border/50">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="section-subtitle flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Career & Impact
        </div>
        <h2 className="section-title text-3xl sm:text-4xl">
          Professional Experience
        </h2>
        <p className="text-slateText-muted max-w-2xl text-sm sm:text-base">
          1+ year of engineering experience delivering enterprise-grade software solutions, high-volume state pipelines, and accessible interfaces for international clients.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-midnight-border ml-3 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-midnight-950 border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-200" />

            <div className="midnight-card rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-midnight-border pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slateText-primary group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/15 text-accent border border-accent/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-slateText-secondary mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slateText-muted">•</span>
                    <span className="text-xs font-normal text-slateText-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slateText-muted px-3 py-1.5 rounded-lg bg-midnight-950 border border-midnight-border self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Context Summary */}
              <p className="text-sm text-slateText-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Key Deliverables & Achievements */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slateText-muted">
                  Engineering Scope & Contributions:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.achievements.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slateText-secondary">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slateText-muted mr-1">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-slateText-secondary bg-midnight-950 border border-midnight-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
