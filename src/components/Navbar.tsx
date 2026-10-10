import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  Phone,
  Clock,
  Menu,
  X,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { STORE_DETAILS, logoImg } from '../data/storeData';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onSelectCollection: (colId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  activeTab,
  onSelectTab,
  onSelectCollection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onSelectTab(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappDirectUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hi Vastra Collections, I would like to inquire about your unstitched suits and latest collection.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#1C2A39] text-[#FAF8F5] text-xs py-2 px-4 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#C5A059] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              New Delhi Boutique
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">
              Unstitched Elegance. Designed by You.
            </span>
            <span className="text-[#E2CCA0] font-normal">
              Free Express Delivery on orders over ₹999
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Mon - Sat: 10:30 AM - 8:00 PM</span>
            </div>
            <a
              href={`tel:${STORE_DETAILS.phoneRaw}`}
              className="hidden md:flex items-center gap-1 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{STORE_DETAILS.phone}</span>
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#4ade80] hover:text-white transition-colors"
              title="Direct WhatsApp with Stylist"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C2A39] hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Boutique Brand Logo */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
            onClick={() => handleNavClick('hero')}
            title="Vastra Collection - Back to Home"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-[#C5A059]/50 bg-white shadow-xs shrink-0 group-hover:border-[#C5A059] group-hover:shadow-md transition-all p-0.5">
              <img
                src={logoImg}
                alt="Vastra Collection Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-semibold text-[#1C2A39] leading-tight group-hover:text-[#C5A059] transition-colors">
                VASTRA
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] sm:text-[10px] tracking-[0.32em] text-[#C5A059] uppercase font-semibold">
                  COLLECTION
                </span>
                <span className="text-[8px] text-[#8C271E]/80 hidden md:inline tracking-wider font-medium">
                  • Atelier
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button
              onClick={() => handleNavClick('collections')}
              className={`transition-colors hover:text-[#C5A059] py-1 ${
                activeTab === 'collections'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className={`transition-colors hover:text-[#C5A059] py-1 ${
                activeTab === 'shop'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              Shop Suits
            </button>
            <button
              onClick={() => handleNavClick('stitching-guide')}
              className={`transition-colors hover:text-[#C5A059] py-1 flex items-center gap-1.5 ${
                activeTab === 'stitching-guide'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Designed by You
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors hover:text-[#C5A059] py-1 ${
                activeTab === 'about'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className={`transition-colors hover:text-[#C5A059] py-1 ${
                activeTab === 'testimonials'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className={`transition-colors hover:text-[#C5A059] py-1 ${
                activeTab === 'faq'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('store-contact')}
              className={`transition-colors hover:text-[#C5A059] py-1 flex items-center gap-1 ${
                activeTab === 'store-contact'
                  ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                  : 'text-[#1C2A39]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Visit Store
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search toggler / input */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white border border-[#C5A059]/40 rounded-full pl-3 pr-2 py-1 shadow-sm w-44 sm:w-60">
                  <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search silk, cotton, prints..."
                    className="w-full text-xs bg-transparent focus:outline-none text-[#1C2A39]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="p-1 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#1C2A39] hover:text-[#C5A059] transition-colors rounded-full hover:bg-stone-100/70"
                  aria-label="Search collection"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 text-[#1C2A39] hover:text-[#C5A059] transition-colors rounded-full hover:bg-stone-100/70"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#C5A059] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Bag / Cart Icon */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 text-[#FAF8F5] bg-[#1C2A39] hover:bg-[#25394e] transition-colors rounded-full shadow-sm flex items-center justify-center"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-6 py-6 space-y-4 shadow-xl">
          <div className="pb-3 border-b border-[#E8E2D8]">
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-medium">
              Explore Collections
            </p>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => {
                  onSelectCollection('pastel-flora');
                  handleNavClick('shop');
                }}
                className="text-left text-sm py-1.5 text-[#1C2A39] hover:text-[#C5A059]"
              >
                🌸 The Pastel Flora Collection (Pure Cotton)
              </button>
              <button
                onClick={() => {
                  onSelectCollection('royal-heritage');
                  handleNavClick('shop');
                }}
                className="text-left text-sm py-1.5 text-[#1C2A39] hover:text-[#C5A059]"
              >
                👑 Royal Heritage Series (Banarasi & Chanderi Silk)
              </button>
              <button
                onClick={() => {
                  onSelectCollection('contemporary-georgette');
                  handleNavClick('shop');
                }}
                className="text-left text-sm py-1.5 text-[#1C2A39] hover:text-[#C5A059]"
              >
                ✨ Contemporary Georgette Sets (Party & Mirror-Work)
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 pt-1">
            <button
              onClick={() => handleNavClick('shop')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059]"
            >
              Shop All Suits & Materials
            </button>
            <button
              onClick={() => handleNavClick('stitching-guide')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059] flex items-center justify-between"
            >
              <span>Designed By You (Tailoring Guide)</span>
              <span className="text-xs bg-[#C5A059]/15 text-[#8C6D2D] px-2 py-0.5 rounded">
                Custom Fit
              </span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059]"
            >
              About Vastra Collections
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059]"
            >
              Customer Reviews
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059]"
            >
              FAQs & Fabric Care
            </button>
            <button
              onClick={() => handleNavClick('store-contact')}
              className="text-left font-medium text-base text-[#1C2A39] hover:text-[#C5A059]"
            >
              Store Location & Contact Details
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <a
              href={`tel:${STORE_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-[#1C2A39] font-medium"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Us: {STORE_DETAILS.phone}</span>
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
