import React from 'react';
import { X, Heart, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/storeData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveFromWishlist,
  onMoveToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D8] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h3 className="font-serif text-xl text-[#1C2A39] font-semibold">
              Saved Suits & Fabrics
            </h3>
            <span className="text-xs bg-[#FAF8F5] text-stone-700 px-2 py-0.5 rounded-full border border-stone-200">
              {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center mx-auto text-stone-300">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-[#1C2A39]">Your wishlist is empty</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Click the heart icon on any unstitched suit to save it for your next custom tailoring project.
              </p>
            </div>
          ) : (
            items.map((product) => {
              const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                `Hi Vastra Collections! I have saved ${product.name} (₹${product.price}) in my wishlist and would like to confirm availability.`
              )}`;

              return (
                <div
                  key={product.id}
                  className="bg-white p-3.5 rounded-lg border border-[#E8E2D8] flex gap-3 shadow-xs"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded bg-stone-100 shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#1C2A39] line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveFromWishlist(product)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-stone-500 font-medium">
                        {product.fabric}
                      </p>
                      <p className="text-xs font-bold text-[#1C2A39] mt-1">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => onMoveToCart(product)}
                        className="flex-1 py-1.5 px-2 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-[11px] font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 bg-white border-t border-[#E8E2D8]">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#FAF8F5] border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded hover:bg-stone-100"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
