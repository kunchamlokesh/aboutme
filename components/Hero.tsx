'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-[980px] mx-auto px-8 py-16 w-full">
        <div className="mb-8 inline-flex items-center gap-2 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] rounded-full py-1.5 px-4 font-mono text-xs text-[#00d4ff] tracking-wider" style={{animation: isVisible ? 'fadeUp 0.8s ease both' : 'none'}}>
          GenAI QA · Responsible AI · Enterprise Testing
        </div>
        
        <h1 className="font-display font-extrabold text-6xl md:text-7xl leading-tight tracking-tighter mb-6" style={{animation: isVisible ? 'fadeUp 0.8s ease 0.1s both' : 'none'}}>
          Lokesh<br/>
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#7b5cff] to-[#00ffa3] bg-clip-text text-transparent">
            Kuncham
          </span>
        </h1>

        <p className="text-lg text-[#6b7591] max-w-2xl mb-8 font-light leading-relaxed" style={{animation: isVisible ? 'fadeUp 0.8s ease 0.2s both' : 'none'}}>
          <strong className="text-[#e8ecf4]">GenAI QA Expert</strong> specializing in enterprise AI quality engineering —
          from red-teaming LLM platforms and building in-house QA tools
          to governing end-to-end production AI delivery.
          9+ years shaping how software quality evolves alongside AI.
        </p>

        <div className="flex gap-4 flex-wrap mb-16" style={{animation: isVisible ? 'fadeUp 0.8s ease 0.3s both' : 'none'}}>
          <a href="mailto:lokeshtv17@gmail.com" className="inline-flex items-center gap-2 bg-[#00d4ff] text-black px-7 py-3 rounded hover:bg-[#33dcff] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg font-medium">
            Get in touch ↗
          </a>
          <a href="#expertise" className="inline-flex items-center gap-2 bg-transparent text-[#e8ecf4] border border-[#1e2535] px-7 py-3 rounded hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200 hover:-translate-y-0.5 font-medium">
            Explore expertise ↓
          </a>
        </div>

        <div className="flex gap-12 flex-wrap pt-8 border-t border-[#1e2535]" style={{animation: isVisible ? 'fadeUp 0.8s ease 0.4s both' : 'none'}}>
          {[
            { num: '9+', label: 'years in QA' },
            { num: '50+', label: 'QA service variations' },
            { num: '1000+', label: 'red team prompts' },
            { num: '3', label: 'in-house tools built' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-4xl font-extrabold">
                {stat.num}
              </div>
              <div className="text-xs text-[#6b7591] font-mono tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}