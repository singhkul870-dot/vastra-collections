import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, Sparkles, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    itemBought: '',
    review: '',
    rating: 5,
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: formData.name,
      tag: 'Verified Shopper',
      review: formData.review,
      rating: formData.rating,
      date: 'Just now',
      verified: true,
      itemBought: formData.itemBought || 'Custom Suit Material',
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setFormData({ name: '', itemBought: '', review: '', rating: 5 });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
              Loved by Women Across India
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from our boutique visitors and online patrons who styled their unstitched sets.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FAF8F5] border border-[#1C2A39] text-[#1C2A39] hover:bg-[#1C2A39] hover:text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#C5A059]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] rounded-xl p-6 sm:p-7 border border-[#E8E2D8] flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Author & Item */}
              <div className="pt-4 border-t border-stone-200/80">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-[#1C2A39]">
                    {item.name}
                  </h4>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8C6D2D] font-medium mt-0.5">
                  Purchased: {item.itemBought}
                </p>
                <p className="text-[10px] text-stone-500 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-[#1C2A39] font-medium mb-1">
              Share Your Vastra Experience
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Tell us how you tailored your unstitched fabric and styled your outfit.
            </p>

            {submittedMessage ? (
              <div className="p-6 text-center text-emerald-700 bg-emerald-50 rounded-lg">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <p className="font-semibold text-sm">Thank you for your valuable feedback!</p>
                <p className="text-xs text-emerald-600 mt-1">Your review has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Suit / Collection Purchased
                  </label>
                  <input
                    type="text"
                    value={formData.itemBought}
                    onChange={(e) => setFormData({ ...formData, itemBought: e.target.value })}
                    placeholder="e.g. Pastel Flora Pure Cotton Suit"
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[5, 4, 3, 2, 1].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: r })}
                        className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 ${
                          formData.rating === r
                            ? 'bg-[#1C2A39] text-white'
                            : 'bg-[#FAF8F5] text-stone-700 border border-stone-200'
                        }`}
                      >
                        <Star className="w-3 h-3 fill-current text-[#C5A059]" />
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C2A39] mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    placeholder="Share details about the fabric softness, colors, delivery, and stitching..."
                    className="w-full text-xs p-2.5 bg-[#FAF8F5] border border-stone-200 rounded focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
