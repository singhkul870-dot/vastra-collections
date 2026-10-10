import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Search,
  Sparkles,
  MessageCircle,
  Phone,
  Scissors,
  Shirt,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { FAQ_ITEMS, FAQItem } from '../data/faqData';
import { STORE_DETAILS } from '../data/storeData';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(['faq-fc-1', 'faq-cs-1', 'faq-rs-1'])
  );

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'fabric-care', label: 'Fabric Care', icon: Shirt },
    { id: 'custom-stitching', label: 'Custom Stitching', icon: Scissors },
    { id: 'returns-shipping', label: 'Returns & Shipping', icon: RotateCcw },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesQ = item.question.toLowerCase().includes(q);
        const matchesA = item.answer.toLowerCase().includes(q);
        const matchesK = item.keyPoints?.some((k) => k.toLowerCase().includes(q));
        if (!matchesQ && !matchesA && !matchesK) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const whatsappFaqUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hi Vastra Collections! I have a question about fabric care / stitching / returns.'
  )}`;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Assistance & Guidance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about caring for our handpicked textiles, custom tailor measurements, and doorstep deliveries.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., silk dry clean, plus size, 7-day return, COD)..."
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 bg-white border border-[#E8E2D8] rounded-full focus:outline-none focus:border-[#C5A059] shadow-xs text-stone-800 placeholder-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-xs text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#1C2A39] text-[#FAF8F5] shadow-xs'
                    : 'bg-white text-stone-700 border border-[#E8E2D8] hover:border-stone-400'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C5A059]' : 'text-stone-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center border border-[#E8E2D8] space-y-3">
              <HelpCircle className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h4 className="font-serif text-xl text-[#1C2A39]">No matching answers found</h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Couldn't find what you're looking for? Message our Delhi boutique directly on WhatsApp for an immediate answer.
              </p>
              <a
                href={whatsappFaqUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#20ba5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Stylist on WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-[#E8E2D8] transition-all duration-200 overflow-hidden shadow-xs hover:border-[#C5A059]/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider uppercase text-[#8C6D2D] font-semibold block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg text-[#1C2A39] font-medium leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`p-1.5 rounded-full bg-[#FAF8F5] border border-stone-200 text-stone-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#C5A059]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed space-y-3 animate-fadeIn">
                      <p className="font-normal">{item.answer}</p>

                      {item.keyPoints && item.keyPoints.length > 0 && (
                        <div className="bg-[#FAF8F5] p-3 sm:p-3.5 rounded-lg border border-stone-200/80 space-y-1.5">
                          <p className="text-xs font-semibold text-[#1C2A39]">
                            Quick Takeaways:
                          </p>
                          <ul className="space-y-1">
                            {item.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Desk Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D8] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Personalized Assistance
            </span>
            <h3 className="font-serif text-2xl text-[#1C2A39] font-semibold">
              Have a specific fabric question or styling doubt?
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xl">
              Our Delhi boutique masters are available Mon – Sat (10:30 AM – 8:00 PM) to assist with video consultations, color matching, and yardage queries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={whatsappFaqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${STORE_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Boutique</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
