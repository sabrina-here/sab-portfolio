'use client';

import React from 'react';
import { ArrowDown, ExternalLink, Mail, Code, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-midnight-700/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-midnight-800/90 border border-midnight-border text-slateText-secondary text-xs font-mono shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slateText-primary">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slateText-secondary max-w-3xl mx-auto leading-relaxed">
            Frontend Engineer specializing in <span className="text-slateText-primary font-semibold">React, Next.js & TypeScript</span> — expanding into scalable <span className="text-accent font-semibold">Full-Stack</span> architectures.
          </p>
        </div>

        {/* Narrative Bio */}
        <p className="text-slateText-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.longBio}
        </p>

        {/* Quick CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-md transition-all duration-200"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-midnight-800/90 border border-midnight-border text-slateText-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-midnight-950/80 border border-midnight-border text-slateText-secondary hover:text-slateText-primary font-medium text-sm hover:border-slateText-muted transition-all duration-200"
          >
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Social / Profile Links */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-midnight-800/60 border border-midnight-border text-slateText-secondary hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-midnight-800/60 border border-midnight-border text-slateText-secondary hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-midnight-800/60 border border-midnight-border text-slateText-secondary hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors flex items-center gap-1.5"
            aria-label="LeetCode Profile"
          >
            <Code className="w-4 h-4 text-accent" />
            <span>LeetCode (50+)</span>
          </a>
          <a
            href={PERSONAL_INFO.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-midnight-800/60 border border-midnight-border text-slateText-secondary hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors flex items-center gap-1.5"
            aria-label="Codeforces Profile"
          >
            <Terminal className="w-4 h-4 text-accent" />
            <span>Codeforces (50+)</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-midnight-800/40 border border-midnight-border/70 backdrop-blur-sm text-center space-y-1 hover:border-accent/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-slateText-primary font-mono text-accent">
                {stat.value}
              </div>
              <div className="text-xs text-slateText-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
