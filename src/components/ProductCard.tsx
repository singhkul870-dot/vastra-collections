import React from 'react';
import { Heart, Eye, ShoppingBag, MessageCircle, Star } from 'lucide-react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/storeData';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const whatsappMessage = `Hi Vastra Collections! I am interested in purchasing "${product.name}" (SKU: ${product.sku}, Price: ₹${product.price.toLocaleString('en-IN')}). Is this unstitched set available?`;
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="group bg-white rounded-lg border border-[#E8E2D8] hover:border-[#C5A059]/60 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start">
          {product.isBestseller && (
            <span className="bg-[#C5A059] text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
              Bestseller
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#1C2A39] text-[#FAF8F5] text-[10px] font-medium tracking-wider px-1.5 py-0.5 rounded">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-colors ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600'
              : 'bg-white/80 text-stone-700 hover:text-rose-600 hover:bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button overlay */}
        <div className="absolute inset-x-0 bottom-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 bg-white/95 text-[#1C2A39] hover:bg-[#1C2A39] hover:text-white text-xs font-semibold uppercase tracking-wider rounded backdrop-blur-sm shadow-md transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View & Specs</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Collection & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span className="text-[#8C6D2D] font-medium tracking-wide uppercase text-[11px] truncate max-w-[65%]">
              {product.collectionTitle}
            </span>
            <div className="flex items-center gap-1 text-amber-500 shrink-0">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[11px] font-medium text-stone-700">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base sm:text-lg text-[#1C2A39] font-medium leading-snug line-clamp-1 hover:text-[#C5A059] cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          {/* Fabric badge info */}
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-600">
            <span className="inline-block bg-[#FAF8F5] border border-stone-200 px-2 py-0.5 rounded text-[11px] font-medium text-stone-700">
              {product.fabric}
            </span>
            <span className="text-[11px] text-stone-600">
              • {product.dimensions.kurta.split(' ')[0]} {product.dimensions.kurta.split(' ')[1]}
            </span>
          </div>

          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="pt-3 border-t border-stone-100 space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#1C2A39]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-600 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
              Unstitched Set
            </span>
          </div>

          {/* Dual action buttons: Add to Bag + Direct WhatsApp */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#FAF8F5] hover:bg-[#25D366] text-[#1C2A39] hover:text-white border border-stone-200 hover:border-[#25D366] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              title="Order directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
