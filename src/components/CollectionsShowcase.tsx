import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES_INFO } from '../data/storeData';

interface CollectionsShowcaseProps {
  onSelectCategory: (catId: string) => void;
}

export const CollectionsShowcase: React.FC<CollectionsShowcaseProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="collections" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated For Every Occasion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
            Signature E-Commerce Collections
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From breezy daywear cottons to royal Banarasi heritage silks and shimmering party georgettes, explore our 3 curated unstitched lines.
          </p>
        </div>

        {/* 3 Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES_INFO.map((cat, index) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-[#E8E2D8] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Category Image with Zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Top Badge: Tag & Index */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-[#1C2A39]/80 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-2.5 py-1 rounded font-medium">
                    {cat.tag}
                  </span>
                  <span className="text-white/80 font-serif text-sm font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Price range overlay */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#FAF8F5]/95 text-[#1C2A39] text-xs font-semibold px-2.5 py-1 rounded shadow-xs border border-stone-200">
                    Range: <span className="text-[#8C6D2D]">{cat.priceRange}</span>
                  </span>
                </div>
              </div>

              {/* Category Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                      {cat.subtitle}
                    </span>
                    <span className="text-xs text-stone-600 font-medium">{cat.count}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C2A39] mt-1 font-semibold group-hover:text-[#C5A059] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed line-clamp-3 font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FAF8F5] hover:bg-[#1C2A39] text-[#1C2A39] hover:text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded transition-all duration-300 border border-[#E8E2D8] hover:border-[#1C2A39]"
                  >
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
