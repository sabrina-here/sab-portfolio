'use client';

import React from 'react';
import { GraduationCap, Award, Code, Terminal, ExternalLink } from 'lucide-react';
import { EDUCATIONS, COMPETITIVE_PROGRAMMING } from '../data/portfolioData';

export const EducationDSA: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-midnight-border/50">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="section-subtitle flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Academic Rigor & Algorithms
        </div>
        <h2 className="section-title text-3xl sm:text-4xl">
          Education & Problem Solving
        </h2>
        <p className="text-slateText-muted max-w-2xl text-sm sm:text-base">
          Strong academic track record in Computer Science and Engineering alongside continuous competitive programming to hone algorithmic problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slateText-muted mb-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>Academic Qualifications</span>
          </div>

          <div className="space-y-4">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                className="midnight-card rounded-2xl p-6 sm:p-7 space-y-3 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slateText-primary group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-accent/15 text-accent border border-accent/30 self-start sm:self-auto">
                    {edu.grade}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slateText-secondary flex items-center justify-between">
                  <span>{edu.institution}</span>
                  <span className="text-xs font-mono text-slateText-muted font-normal">{edu.period}</span>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slateText-muted leading-relaxed pt-1">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming & DSA Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slateText-muted mb-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span>Competitive Programming</span>
          </div>

          {/* LeetCode Card */}
          <div className="midnight-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-accent">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slateText-primary">LeetCode</h3>
                  <span className="text-xs font-mono text-slateText-muted">@{COMPETITIVE_PROGRAMMING.leetcode.handle}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {COMPETITIVE_PROGRAMMING.leetcode.solved}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slateText-secondary leading-relaxed">
              Practicing fundamental algorithms, data structures (Arrays, Linked Lists, Trees, Graph traversals, Dynamic Programming), and time/space complexity optimization.
            </p>

            <a
              href={COMPETITIVE_PROGRAMMING.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover transition-colors pt-1"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Codeforces Card */}
          <div className="midnight-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-accent">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slateText-primary">Codeforces</h3>
                  <span className="text-xs font-mono text-slateText-muted">@{COMPETITIVE_PROGRAMMING.codeforces.handle}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {COMPETITIVE_PROGRAMMING.codeforces.solved}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slateText-secondary leading-relaxed">
              Engaging in timed programming contests to develop rapid mathematical logic, edge case identification, and robust C++ implementations.
            </p>

            <a
              href={COMPETITIVE_PROGRAMMING.codeforces.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover transition-colors pt-1"
            >
              <span>View Codeforces Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Mindset Box */}
          <div className="p-5 rounded-2xl bg-midnight-950/80 border border-dashed border-midnight-border space-y-2">
            <div className="text-xs font-bold text-slateText-primary flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Core Problem Solving Philosophy</span>
            </div>
            <p className="text-xs text-slateText-muted leading-relaxed">
              Writing clean, modular code backed by sound algorithmic efficiency. Constant practice on competitive platforms ensures rapid debugging and attention to detail under tight sprint constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
