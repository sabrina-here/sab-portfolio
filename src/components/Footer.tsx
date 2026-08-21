'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-midnight-border/70 bg-midnight-950/90 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
            <span className="font-bold text-slateText-primary text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slateText-muted">
            Frontend Engineer • Aspiring Full-Stack Developer • Dhaka, Bangladesh
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4 text-slateText-muted text-sm">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors text-xs font-mono"
            aria-label="LeetCode"
          >
            LeetCode
          </a>
          <a
            href={PERSONAL_INFO.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors text-xs font-mono"
            aria-label="Codeforces"
          >
            Codeforces
          </a>
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-slateText-muted hover:text-accent transition-colors px-3 py-1.5 rounded-lg bg-midnight-900 border border-midnight-border hover:border-accent/40"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-midnight-border/30 text-center text-xs text-slateText-muted/60 font-mono">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js (App Router), TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
};
