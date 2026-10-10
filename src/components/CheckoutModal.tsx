import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_DETAILS } from '../data/storeData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponCode: string;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  couponCode,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110041',
    paymentMethod: 'upi',
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const shippingCost = subtotal >= 999 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pincode) return;
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `VC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('confirmed');
    onOrderComplete();
  };

  const orderSummaryText = items
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.product.name} (Qty: ${it.quantity}) - ₹${(
          it.product.price * it.quantity
        ).toLocaleString('en-IN')}`
    )
    .join('\n');

  const whatsappOrderReceiptUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Namaste Vastra Collections!\nI just placed an order on your website:\n• Order ID: ${orderId}\n• Customer: ${formData.fullName} (${formData.phone})\n• Delivery Address: ${formData.address}, ${formData.city} - ${formData.pincode}\n• Payment Method: ${formData.paymentMethod.toUpperCase()}\n• Grand Total: ₹${grandTotal.toLocaleString('en-IN')}\n\nItems:\n${orderSummaryText}\n\nPlease confirm dispatch!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-fadeIn max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'shipping' && (
          <form onSubmit={handleProceedToPayment} className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                Step 1 of 2
              </span>
              <h3 className="font-serif text-2xl text-[#1C2A39] font-medium">
                Shipping & Delivery Details
              </h3>
              <p className="text-xs text-stone-500">
                Delivering straight to your doorstep across India.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                  Recipient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ananya Mehra"
                  className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Phone Number (WhatsApp Updates) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@gmail.com"
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                  Complete Street Address & Landmark *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House/Flat No., Building name, Street, Landmark"
                  className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })
                    }
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Summary preview */}
            <div className="bg-[#FAF8F5] p-3 rounded text-xs space-y-1 border border-stone-200">
              <div className="flex justify-between text-stone-600">
                <span>Items ({items.length}):</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount ({couponCode}):</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>Shipping:</span>
                <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between font-bold text-[#1C2A39] pt-1 border-t border-stone-200 text-sm">
                <span>Payable Amount:</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
            >
              Continue to Payment (₹{grandTotal.toLocaleString('en-IN')})
            </button>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={handlePlaceOrder} className="space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                Step 2 of 2
              </span>
              <h3 className="font-serif text-2xl text-[#1C2A39] font-medium">
                Choose Payment Method
              </h3>
              <p className="text-xs text-stone-500">
                All transactions are safe and encrypted.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: 'upi',
                  title: 'Instant UPI / QR / Google Pay / PhonePe',
                  desc: 'Zero extra fees. Instant payment confirmation.',
                },
                {
                  id: 'cod',
                  title: 'Cash on Delivery (COD)',
                  desc: 'Pay safely upon package inspection at your doorstep.',
                },
                {
                  id: 'card',
                  title: 'Debit / Credit Card & Net Banking',
                  desc: 'Visa, MasterCard, RuPay & Net Banking.',
                },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`block p-3.5 rounded-lg border cursor-pointer transition-all ${
                    formData.paymentMethod === opt.id
                      ? 'border-[#C5A059] bg-[#FAF8F5] ring-1 ring-[#C5A059]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={opt.id}
                      checked={formData.paymentMethod === opt.id}
                      onChange={() => setFormData({ ...formData, paymentMethod: opt.id })}
                      className="mt-0.5 accent-[#C5A059]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#1C2A39]">{opt.title}</p>
                      <p className="text-[11px] text-stone-500">{opt.desc}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="p-3.5 bg-amber-50/60 rounded-lg border border-amber-200/80 flex items-center gap-2.5 text-xs text-amber-900">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Vastra Quality Promise: 100% genuine unstitched fabric with generous length guarantee.</span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="w-1/3 py-3 border border-stone-300 text-stone-700 text-xs font-semibold rounded hover:bg-stone-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                Place Order (₹{grandTotal.toLocaleString('en-IN')})
              </button>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="text-center py-4 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <h3 className="font-serif text-3xl text-[#1C2A39] font-medium">
              Order Confirmed!
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your unstitched suit set order has been received by Vastra Collections New Delhi.
            </p>

            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 text-xs text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between font-bold text-[#1C2A39]">
                <span>Order Reference:</span>
                <span className="text-[#8C6D2D]">{orderId}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Payment Mode:</span>
                <span className="uppercase">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Delivery Address:</span>
                <span className="truncate max-w-[200px]">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Estimated Dispatch:</span>
                <span className="text-emerald-700 font-medium">Within 24 Hours</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
              <a
                href={whatsappOrderReceiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Order Copy on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 border border-stone-300 text-stone-700 text-xs font-semibold uppercase rounded hover:bg-stone-50"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
