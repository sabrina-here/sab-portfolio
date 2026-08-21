'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-midnight-border/50">
      {/* Section Header */}
      <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
        <div className="section-subtitle flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Let's Work Together
        </div>
        <h2 className="section-title text-3xl sm:text-4xl">
          Get In Touch
        </h2>
        <p className="text-slateText-muted text-sm sm:text-base">
          Whether you have an opening for a Frontend or Full-Stack developer, want to collaborate on a project, or just want to chat tech — my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Information Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Quick Email Copy Box */}
          <div className="midnight-card rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slateText-muted">Direct Email</span>
                <div className="text-sm font-semibold text-slateText-primary break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-midnight-950 border border-midnight-border hover:border-accent text-xs font-medium text-slateText-secondary hover:text-accent transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Click to Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Phone & Location */}
          <div className="midnight-card rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slateText-muted">Phone / WhatsApp</span>
                <div className="text-sm font-semibold text-slateText-primary font-mono">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-midnight-border">
              <div className="p-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slateText-muted">Location & Timezone</span>
                <div className="text-sm font-semibold text-slateText-primary">
                  {PERSONAL_INFO.location} (GMT+6)
                </div>
                <div className="text-xs text-accent font-mono mt-0.5">
                  Available for Remote & On-Site
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Box */}
          <div className="midnight-card rounded-2xl p-6 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slateText-muted block">
              Professional Profiles
            </span>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-midnight-950 border border-midnight-border hover:border-accent text-xs font-semibold text-slateText-secondary hover:text-accent transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-midnight-950 border border-midnight-border hover:border-accent text-xs font-semibold text-slateText-secondary hover:text-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="midnight-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slateText-primary flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slateText-muted">
                Fill out the details below to open an email draft instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slateText-muted">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-slateText-primary placeholder-slateText-muted/50 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slateText-muted">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-slateText-primary placeholder-slateText-muted/50 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slateText-muted">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-slateText-primary placeholder-slateText-muted/50 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slateText-muted">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Sabrina, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-midnight-950 border border-midnight-border text-slateText-primary placeholder-slateText-muted/50 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-accent text-white font-semibold text-sm shadow-accent-sm hover:bg-accent-hover hover:shadow-accent-md transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                  ✓ Opening mail client with your message!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
