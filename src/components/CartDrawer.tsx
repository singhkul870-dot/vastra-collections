import React, { useState } from 'react';
import {
  X,
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  Tag,
  CheckCircle,
  Truck,
} from 'lucide-react';
import { CartItem } from '../types';
import { STORE_DETAILS } from '../data/storeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: (subtotal: number, discount: number, coupon: string) => void;
  onBrowseShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onBrowseShop,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  let discount = 0;
  if (appliedCoupon === 'VASTRA10') {
    discount = Math.round(subtotal * 0.1);
  } else if (appliedCoupon === 'FESTIVE500') {
    discount = subtotal >= 2000 ? 500 : 0;
  }

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'VASTRA10') {
      setAppliedCoupon('VASTRA10');
      setCouponError(null);
    } else if (code === 'FESTIVE500') {
      if (subtotal >= 2000) {
        setAppliedCoupon('FESTIVE500');
        setCouponError(null);
      } else {
        setCouponError('FESTIVE500 requires minimum cart value of ₹2,000.');
      }
    } else {
      setCouponError('Invalid coupon. Try VASTRA10 for 10% off.');
    }
  };

  const whatsappOrderMessage = `Hi Vastra Collections! I would like to place an order for the following unstitched suit sets:\n\n${items
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.product.name} (SKU: ${it.product.sku}) - Qty: ${it.quantity} - ₹${(
          it.product.price * it.quantity
        ).toLocaleString('en-IN')}${it.note ? ` [Note: ${it.note}]` : ''}`
    )
    .join('\n')}\n\n• Subtotal: ₹${subtotal.toLocaleString('en-IN')}${
    discount > 0 ? `\n• Discount (${appliedCoupon}): -₹${discount.toLocaleString('en-IN')}` : ''
  }\n• Delivery: ${subtotal >= 999 ? 'Free Express' : '₹99'}\n\nPlease share payment and delivery confirmation.`;

  const whatsappCartUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    whatsappOrderMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-[#E8E2D8] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-[#1C2A39] font-semibold">
              Your Boutique Bag
            </h3>
            <span className="text-xs bg-[#FAF8F5] text-stone-700 px-2 py-0.5 rounded-full border border-stone-200">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-[#1C2A39] text-[#FAF8F5] px-5 py-3 text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="flex items-center gap-1.5 font-medium">
              <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
              {remainingForFreeShipping > 0
                ? `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} for Free Express Delivery`
                : 'Congratulations! You unlocked Free Delivery!'}
            </span>
            <span className="text-[11px] text-[#C5A059] font-bold">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C5A059] h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items Scroll List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h4 className="font-serif text-xl text-[#1C2A39]">Your bag is currently empty</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explore our unstitched Pastel Flora cottons, Banarasi silks, and party georgettes.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBrowseShop();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1C2A39] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C5A059] transition-colors"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white p-3.5 rounded-lg border border-[#E8E2D8] flex gap-3 shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded bg-stone-100 shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-[#1C2A39] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 font-medium">
                      {item.product.fabric}
                    </p>
                    {item.note && (
                      <p className="text-[10px] text-[#8C6D2D] bg-[#FAF8F5] px-1.5 py-0.5 rounded mt-1 truncate">
                        Styling: {item.note}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-stone-200 rounded">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:text-black font-semibold"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:text-black font-semibold"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#1C2A39]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Checkout Section */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E8E2D8] bg-white space-y-3.5">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-3" />
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Promo Code (e.g. VASTRA10)"
                  className="w-full text-xs pl-8 pr-2.5 py-2 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 bg-[#1C2A39] text-white text-xs font-semibold rounded hover:bg-[#C5A059] transition-colors"
              >
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                <CheckCircle className="w-3 h-3" />
                Coupon {appliedCoupon} applied successfully!
              </p>
            )}
            {couponError && (
              <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1 border-t border-stone-100">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Boutique Savings:</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className={subtotal >= 999 ? 'text-emerald-700 font-medium' : ''}>
                  {subtotal >= 999 ? 'FREE' : '₹99'}
                </span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#1C2A39] pt-2 border-t border-stone-200">
                <span>Total Amount:</span>
                <span>
                  ₹{(
                    Math.max(0, subtotal - discount) + (subtotal >= 999 ? 0 : 99)
                  ).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => onCheckout(subtotal, discount, appliedCoupon || '')}
                className="w-full py-3 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                Proceed to Checkout
              </button>

              <a
                href={whatsappCartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Checkout</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
