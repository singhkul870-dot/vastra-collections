import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  MessageCircle,
  Scissors,
  Truck,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/storeData';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, note?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [stitchingNote, setStitchingNote] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  if (!isOpen || !product) return null;

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code.');
      return;
    }
    if (pincode.startsWith('110')) {
      setPincodeStatus('Delhi NCR Delivery: Next Day / 24-48 Hours Express Delivery available!');
    } else {
      setPincodeStatus('Standard Pan-India Express Delivery: 3 - 5 Business Days with tracking.');
    }
  };

  const whatsappMessage = `Hi Vastra Collections! I am interested in ordering:
• Item: ${product.name}
• SKU: ${product.sku}
• Price: ₹${product.price.toLocaleString('en-IN')}
• Fabric: ${product.fabric}
• Quantity: ${quantity}
${stitchingNote ? `• Styling Note: ${stitchingNote}` : ''}
Please confirm availability and dispatch schedule.`;

  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF8F5] rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-stone-600 hover:text-stone-900 hover:bg-white shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Product Image & Badges */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-white border border-[#E8E2D8] shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#1C2A39]/85 text-[#FAF8F5] text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                {product.collectionTitle}
              </div>
            </div>

            {/* Fabric Yardage Visual Breakdown */}
            <div className="bg-white p-4 rounded-lg border border-[#E8E2D8] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C2A39]">
                <Scissors className="w-4 h-4 text-[#C5A059]" />
                <span>Generous Unstitched Dimensions</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-[#FAF8F5] rounded border border-stone-200">
                  <p className="font-semibold text-stone-800">Kurta / Top</p>
                  <p className="text-[#8C6D2D] font-medium mt-0.5">{product.dimensions.kurta.split(' ')[0]} Mtr</p>
                  <p className="text-[10px] text-stone-600">Fits up to 52" bust</p>
                </div>
                <div className="p-2 bg-[#FAF8F5] rounded border border-stone-200">
                  <p className="font-semibold text-stone-800">Bottom</p>
                  <p className="text-[#8C6D2D] font-medium mt-0.5">{product.dimensions.bottom.split(' ')[0]} Mtr</p>
                  <p className="text-[10px] text-stone-600">Salwar/Plazo/Pants</p>
                </div>
                <div className="p-2 bg-[#FAF8F5] rounded border border-stone-200">
                  <p className="font-semibold text-stone-800">Dupatta</p>
                  <p className="text-[#8C6D2D] font-medium mt-0.5">{product.dimensions.dupatta.split(' ')[0]} Mtr</p>
                  <p className="text-[10px] text-stone-600">Flowing length</p>
                </div>
              </div>
              <p className="text-[11px] text-stone-600 italic">
                *Ample fabric included for full length silhouettes, bell sleeves, and relaxed flares.
              </p>
            </div>
          </div>

          {/* Right Column: Information, Pricing, & Custom Actions */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#8C6D2D] font-semibold">
                  SKU: {product.sku}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-stone-600">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C2A39] mt-1 font-semibold leading-tight">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-[#1C2A39]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-base text-stone-600 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="bg-[#C5A059]/20 text-[#8C6D2D] text-xs font-semibold px-2 py-0.5 rounded">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 mt-0.5">Inclusive of all taxes. Free express shipping above ₹999.</p>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {product.longDescription}
              </p>

              {/* Highlights List */}
              <div className="mt-4 space-y-1.5 text-xs text-stone-700 bg-white p-3.5 rounded-lg border border-[#E8E2D8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Fabric:</strong> {product.fabric}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Artisan Work:</strong> {product.work}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Occasion:</strong> {product.occasion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Care:</strong> {product.care}</span>
                </div>
              </div>

              {/* Optional tailoring customization note */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                  Optional Tailoring / Styling Note (for our boutique team):
                </label>
                <input
                  type="text"
                  value={stitchingNote}
                  onChange={(e) => setStitchingNote(e.target.value)}
                  placeholder="e.g. Planning a high-slit straight kurta; need color matching lining advice"
                  className="w-full text-xs p-2.5 bg-white border border-[#E8E2D8] rounded focus:outline-none focus:border-[#C5A059] text-stone-700"
                />
              </div>

              {/* Pincode delivery check */}
              <div className="mt-3">
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 6-digit Pincode"
                    className="w-40 text-xs p-2 bg-white border border-[#E8E2D8] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#1C2A39] text-white text-xs font-semibold rounded hover:bg-[#C5A059] transition-colors"
                  >
                    Check Speed
                  </button>
                </form>
                {pincodeStatus && (
                  <p className="mt-1.5 text-xs text-stone-700 font-medium">
                    {pincodeStatus}
                  </p>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#E8E2D8] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center border border-stone-300 rounded bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-600 hover:text-black font-semibold text-sm"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-stone-800">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-600 hover:text-black font-semibold text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product, quantity, stitchingNote);
                    onClose();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1C2A39] hover:bg-[#C5A059] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded border transition-colors ${
                    isWishlisted
                      ? 'border-rose-300 bg-rose-50 text-rose-600'
                      : 'border-stone-300 bg-white text-stone-600 hover:text-rose-600'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Ordering */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Inquiry on WhatsApp (+91 {STORE_DETAILS.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
