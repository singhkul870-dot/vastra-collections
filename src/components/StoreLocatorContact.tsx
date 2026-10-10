import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  CheckCircle2,
  Navigation,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export const StoreLocatorContact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'message' | 'appointment'>('message');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: '',
    timeSlot: '11:00 AM',
    purpose: 'Bridal / Festive Suit Fabric Preview',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        date: '',
        timeSlot: '11:00 AM',
        purpose: 'Bridal / Festive Suit Fabric Preview',
      });
    }, 4000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'B-87 Chander Vihar Vikaspuri Nilothi Extn New Delhi 110041'
  )}`;

  const whatsappInquiryUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hi Vastra Collections! I would like to visit your boutique in New Delhi or book a live video fabric consultation.`
  )}`;

  return (
    <section id="store-contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us In New Delhi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
            Boutique Location & Inquiries
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Experience our rich Banarasi silks, crisp cambric cottons, and georgettes in person. Or connect with our Delhi master stylists online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Boutique Information & Timings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E8E2D8] shadow-xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Flagship Boutique
                  </span>
                  <h3 className="font-serif text-2xl text-[#1C2A39] font-semibold mt-0.5">
                    {STORE_DETAILS.name}
                  </h3>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded font-medium border border-emerald-200">
                  Open Mon - Sat
                </span>
              </div>

              {/* Physical Address */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1C2A39]">Boutique Address:</p>
                    <p className="mt-0.5 leading-relaxed font-normal">{STORE_DETAILS.addressLine1}</p>
                    <p className="text-stone-600 font-normal">New Delhi, India — PIN: {STORE_DETAILS.pin}</p>
                    <p className="text-[11px] text-stone-600 mt-1 italic">
                      (Also servicing boutique patrons across West Delhi & Rajouri Garden Central Market)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-xs text-stone-600 font-normal">Phone / Support: </span>
                    <a
                      href={`tel:${STORE_DETAILS.phoneRaw}`}
                      className="font-semibold text-[#1C2A39] hover:text-[#C5A059] transition-colors"
                    >
                      {STORE_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-xs text-stone-600 font-normal">Direct Email: </span>
                    <a
                      href={`mailto:${STORE_DETAILS.email}`}
                      className="font-semibold text-[#1C2A39] hover:text-[#C5A059] transition-colors"
                    >
                      {STORE_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direction Buttons */}
              <div className="pt-3 flex gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Map</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C2A39]">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Operating Boutique Hours</span>
              </div>
              <div className="space-y-2 text-xs divide-y divide-stone-100 pt-1">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-700 font-medium">Monday – Saturday</span>
                  <span className="font-semibold text-[#1C2A39]">{STORE_DETAILS.hoursMonSat}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-700 font-medium">Sunday</span>
                  <span className="font-semibold text-rose-600">{STORE_DETAILS.hoursSun}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-600 pt-1">
                *Video consultations can also be scheduled during boutique hours with our master drape stylist.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Appointment & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E8E2D8] shadow-xs">
            
            {/* Toggle Tabs */}
            <div className="flex border-b border-stone-200 mb-6">
              <button
                type="button"
                onClick={() => setInquiryType('message')}
                className={`pb-3 text-xs font-semibold uppercase tracking-wider mr-6 transition-colors border-b-2 ${
                  inquiryType === 'message'
                    ? 'border-[#C5A059] text-[#1C2A39]'
                    : 'border-transparent text-stone-600 hover:text-stone-700'
                }`}
              >
                Send Us An Inquiry
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('appointment')}
                className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
                  inquiryType === 'appointment'
                    ? 'border-[#C5A059] text-[#1C2A39]'
                    : 'border-transparent text-stone-600 hover:text-stone-700'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Book Boutique Visit / Video Preview</span>
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-2xl text-[#1C2A39] font-medium">
                  {inquiryType === 'appointment' ? 'Appointment Request Confirmed!' : 'Message Received!'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Delhi boutique representative will call or WhatsApp you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Vastra Collections! I just submitted an inquiry on your website: ${formData.name} (${formData.phone})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    <span>Need instant confirmation? Click to verify on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Simran Kaur"
                      className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. simran@gmail.com"
                    className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                {inquiryType === 'appointment' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                      >
                        <option value="11:00 AM">11:00 AM – 01:00 PM (Morning)</option>
                        <option value="02:30 PM">02:30 PM – 04:30 PM (Afternoon)</option>
                        <option value="05:30 PM">05:30 PM – 07:30 PM (Evening)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    {inquiryType === 'appointment' ? 'What Fabrics Would You Like to Preview?' : 'Your Message / Requirement *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      inquiryType === 'appointment'
                        ? 'e.g. Looking for Banarasi silk unstitched suits for sister wedding and 2 cotton sets for office...'
                        : 'e.g. Want to inquire about bulk ordering 5 Pastel Flora cotton suits with custom matching dupattas...'
                    }
                    className="w-full text-xs p-3 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {inquiryType === 'appointment' ? 'Confirm Appointment Booking' : 'Submit Boutique Inquiry'}
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
