import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Gem } from 'lucide-react';
import { ABOUT_US_CONTENT, STORE_DETAILS, craftImg } from '../data/storeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Vastra Collections</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal leading-tight">
              Where Tradition Meets Your <br />
              <span className="italic font-medium text-[#C5A059]">Personal Style Statement.</span>
            </h2>

            {/* User's Exact About Us Narrative */}
            <blockquote className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal bg-white p-6 rounded-xl border border-[#E8E2D8] shadow-xs relative">
              <div className="text-4xl text-[#C5A059]/40 font-serif absolute top-2 left-4 select-none">“</div>
              <p className="relative z-10 pl-4">
                {ABOUT_US_CONTENT}
              </p>
            </blockquote>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-lg border border-[#E8E2D8] space-y-2">
                <Gem className="w-5 h-5 text-[#C5A059]" />
                <h4 className="text-sm font-bold text-[#1C2A39]">Pure Handpicked Fibers</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-normal">
                  60x60 Cambric cottons, authentic Banarasi silk zari, and lightweight georgette.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#E8E2D8] space-y-2">
                <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
                <h4 className="text-sm font-bold text-[#1C2A39]">Artisanal Weavers</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-normal">
                  Sourced straight from craft clusters in Sanganer, Varanasi, and Chanderi.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#E8E2D8] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <h4 className="text-sm font-bold text-[#1C2A39]">Flawless Fit</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-normal">
                  Generous yardage so your tailor has complete freedom to craft your dream cut.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-xl bg-white">
              <img
                src={craftImg}
                alt="Vastra Collections boutique craftsmanship"
                className="w-full h-[420px] object-cover"
              />
              <div className="p-6 bg-[#1C2A39] text-[#FAF8F5] space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                  {STORE_DETAILS.tagline}
                </span>
                <p className="font-serif text-xl sm:text-2xl font-semibold">
                  Visit Our New Delhi Boutique
                </p>
                <p className="text-xs text-stone-300 font-normal">
                  {STORE_DETAILS.addressLine1}, {STORE_DETAILS.city} (PIN: {STORE_DETAILS.pin})
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
