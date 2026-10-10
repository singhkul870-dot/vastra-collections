/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionsShowcase } from './components/CollectionsShowcase';
import { ShopCatalog } from './components/ShopCatalog';
import { DesignedByYouGuide } from './components/DesignedByYouGuide';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { StoreLocatorContact } from './components/StoreLocatorContact';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SeoStructuredData } from './components/SeoStructuredData';
import { Product, CartItem } from './types';
import { PRODUCTS, STORE_DETAILS } from './data/storeData';
import { MessageCircle, CheckCircle, ArrowUp } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vastra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('vastra_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Navigation & Filter states
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Checkout payload
  const [checkoutData, setCheckoutData] = useState<{
    subtotal: number;
    discount: number;
    coupon: string;
  }>({ subtotal: 0, discount: 0, coupon: '' });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vastra_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vastra_wishlist', JSON.stringify(Array.from(wishlistIds)));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, note?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, note: note || item.note }
            : item
        );
      }
      return [...prev, { product, quantity, note }];
    });
    showToast(`Added "${product.name}" to your bag!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed from saved suits`);
      } else {
        next.add(product.id);
        showToast(`Saved to wishlist: "${product.name}"`);
      }
      return next;
    });
  };

  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product);
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });
  };

  // Filter & Nav helpers
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('shop');
    const shopElem = document.getElementById('shop');
    if (shopElem) {
      shopElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (secId: string) => {
    setActiveTab(secId);
    const elem = document.getElementById(secId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartCheckout = (subtotal: number, discount: number, coupon: string) => {
    setCheckoutData({ subtotal, discount, coupon });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Derived counts
  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.has(p.id));

  // Floating WhatsApp button url
  const floatingWhatsAppUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hi Vastra Collections! I am on your website and would like assistance with choosing an unstitched suit.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C2A39]">
      <SeoStructuredData />

      {/* Luxury Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onSelectCollection={handleSelectCategory}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => handleNavigateSection('shop')}
          onGuideClick={() => handleNavigateSection('stitching-guide')}
          onStoreClick={() => handleNavigateSection('store-contact')}
        />

        {/* Featured Signature Collections Showcase */}
        <CollectionsShowcase onSelectCategory={handleSelectCategory} />

        {/* Shop Catalog with Real-time Filters */}
        <ShopCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onResetSearch={() => setSearchQuery('')}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* "Designed by You" Interactive Tailoring & Yardage Guide */}
        <DesignedByYouGuide />

        {/* About Vastra Story */}
        <AboutSection />

        {/* Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions: Fabric Care, Custom Stitching & Returns */}
        <FaqSection />

        {/* Boutique Location & Contact Form */}
        <StoreLocatorContact />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleStartCheckout}
        onBrowseShop={() => {
          setIsCartOpen(false);
          handleNavigateSection('shop');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={checkoutData.subtotal}
        discount={checkoutData.discount}
        couponCode={checkoutData.coupon}
        onOrderComplete={handleClearCart}
      />

      {/* Floating Action Button: WhatsApp Stylist */}
      <aside aria-label="Support and Quick Navigation" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 group font-medium text-xs"
          aria-label="Chat with Delhi Boutique on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Stylist</span>
        </a>

        {/* Scroll to top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2.5 bg-white/90 hover:bg-[#1C2A39] text-[#1C2A39] hover:text-white rounded-full shadow-md border border-[#E8E2D8] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </aside>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1C2A39] text-[#FAF8F5] px-4 py-2.5 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-[#C5A059]/40 animate-bounce">
          <CheckCircle className="w-4 h-4 text-[#C5A059]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
