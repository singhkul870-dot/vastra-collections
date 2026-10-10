import React from 'react';
import { ArrowRight, Sparkles, Scissors, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { heroBannerImg, STORE_DETAILS } from '../data/storeData';

interface HeroProps {
  onExploreClick: () => void;
  onGuideClick: () => void;
  onStoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onGuideClick,
  onStoreClick,
}) => {
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vastra Collections! I would like to see your latest unstitched suit sets and place an order.'
  )}`;

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF8F5] pt-4 pb-16 lg:pb-24">
      {/* Decorative subtle texture/glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1C2A39]/5 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left pt-4 lg:pt-0">
            {/* Boutique Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-xs font-medium text-[#8C6D2D]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Premium Women’s Ethnic Wear Boutique • New Delhi</span>
            </div>

            {/* Slogan & Main Headings */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C2A39] leading-[1.15] font-normal tracking-tight">
                Unstitched Elegance. <br />
                <span className="italic font-medium text-[#C5A059]">Designed by You.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                True fashion shouldn’t be constrained by standard factory sizes. We curate the finest pure cottons, opulent Banarasi silks, and contemporary georgettes—empowering you to stitch your own story.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1C2A39] text-[#FAF8F5] text-sm font-medium tracking-wider uppercase hover:bg-[#C5A059] transition-all duration-300 rounded-sm shadow-md group"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onGuideClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#1C2A39] text-[#1C2A39] text-sm font-medium tracking-wider uppercase hover:bg-[#1C2A39] hover:text-[#FAF8F5] transition-all duration-300 rounded-sm"
              >
                <Scissors className="w-4 h-4 text-[#C5A059]" />
                <span>Tailor & Stitching Guide</span>
              </button>
            </div>

            {/* WhatsApp instant support quick button */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-500">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-700 hover:text-[#25D366] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Need styling help? Chat with our Delhi boutique</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C2A39]">100%</p>
                <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">Pure Cotton & Silk</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C2A39]">Zero</p>
                <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">Size Restrictions</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#C5A059]">₹799+</p>
                <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider font-medium">Affordable Luxury</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-fashion Boutique Image Canvas */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative framing border */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C5A059]/30 -z-10 translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-stone-100 border border-stone-200">
                <img
                  src={heroBannerImg}
                  alt="Vastra Collections boutique store interior with stacked fabric rolls and model"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Floating overlay chip for boutique store */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-stone-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">
                      Physical Boutique Open
                    </span>
                    <p className="text-sm font-semibold text-[#1C2A39]">
                      Chander Vihar, Vikaspuri Extn & Rajouri Garden
                    </p>
                    <p className="text-xs text-stone-500">Mon - Sat: 10:30 AM - 8:00 PM</p>
                  </div>
                  <button
                    onClick={onStoreClick}
                    className="shrink-0 px-3 py-1.5 bg-[#1C2A39] text-[#FAF8F5] text-xs font-medium rounded hover:bg-[#C5A059] transition-colors"
                  >
                    View Map
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Feature banner band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl p-5 border border-[#E8E2D8] shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          <div className="flex items-center gap-3.5 pt-2 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center shrink-0">
              <Scissors className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C2A39]">Custom Tailor Freedom</h4>
              <p className="text-xs text-stone-500">2.5m+ generous fabric cuts for an exact tailored fit</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C2A39]">Pan-India Express Delivery</h4>
              <p className="text-xs text-stone-500">Complimentary shipping on orders above ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C2A39]">Authentic Textiles Guarantee</h4>
              <p className="text-xs text-stone-500">Handpicked Banarasi, Chanderi & Pure Cottons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
