import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
  Heart,
  Check,
} from 'lucide-react';
import { STORE_DETAILS, logoImg } from '../data/storeData';

interface FooterProps {
  onSelectCategory: (catId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateSection,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubSuccess(true);
    setTimeout(() => {
      setSubSuccess(false);
      setEmailSub('');
    }, 3000);
  };

  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hi Vastra Collections! I would like to know more about your new collection.'
  )}`;

  return (
    <footer className="bg-[#1C2A39] text-[#FAF8F5] pt-16 pb-12 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/95 p-1 border border-[#C5A059]/40 shrink-0">
                <img
                  src={logoImg}
                  alt="Vastra Collection Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white block leading-tight">
                  VASTRA
                </span>
                <p className="text-[10px] tracking-[0.35em] text-[#C5A059] uppercase font-semibold">
                  COLLECTION
                </p>
              </div>
            </div>
            
            <p className="text-sm font-serif italic text-[#E2CCA0] text-base">
              "{STORE_DETAILS.tagline}"
            </p>

            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Premium Women's Ethnic Wear Boutique in New Delhi. We celebrate authentic Indian handloom textiles and empower you to stitch your own story with unstitched salwar suits and kurtis.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Delhi Boutique Stylist</span>
              </a>
            </div>
          </div>

          {/* Column 2: Signature Collections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Signature Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('pastel-flora');
                    onNavigateSection('shop');
                  }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  🌸 The Pastel Flora Collection (Pure Cotton)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('royal-heritage');
                    onNavigateSection('shop');
                  }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  👑 Royal Heritage Series (Banarasi & Chanderi Silk)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('contemporary-georgette');
                    onNavigateSection('shop');
                  }}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  ✨ Contemporary Georgette Sets (Party & Mirror)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('stitching-guide')}
                  className="hover:text-[#C5A059] transition-colors text-left text-[#E2CCA0]"
                >
                  ✂️ "Designed by You" Custom Stitching Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  ❓ FAQs (Fabric Care, Stitching & Returns)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Store & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Boutique & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  {STORE_DETAILS.addressLine1}, New Delhi, PIN: {STORE_DETAILS.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${STORE_DETAILS.phoneRaw}`} className="hover:text-[#C5A059]">
                  {STORE_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${STORE_DETAILS.email}`} className="hover:text-[#C5A059]">
                  {STORE_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: {STORE_DETAILS.hoursMonSat}</p>
                  <p className="text-rose-400">Sunday: {STORE_DETAILS.hoursSun}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Exclusive Previews (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Festive Previews
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              Be the first to know about new handloom drops and seasonal offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                placeholder="Enter your email"
                className="w-full text-xs p-2.5 bg-white/10 border border-white/20 rounded focus:border-[#C5A059] focus:outline-none text-white placeholder-stone-400"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#C5A059] hover:bg-[#A4813E] text-[#1C2A39] text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                {subSuccess ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Vastra Collections. All Rights Reserved. Unstitched Elegance.</p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onNavigateSection('about')} className="hover:text-[#C5A059]">
              About Us
            </button>
            <span>•</span>
            <button onClick={() => onNavigateSection('store-contact')} className="hover:text-[#C5A059]">
              Store Locator
            </button>
            <span>•</span>
            <button onClick={() => onNavigateSection('testimonials')} className="hover:text-[#C5A059]">
              Customer Reviews
            </button>
            <span>•</span>
            <button onClick={() => onNavigateSection('faq')} className="hover:text-[#C5A059]">
              FAQs
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
