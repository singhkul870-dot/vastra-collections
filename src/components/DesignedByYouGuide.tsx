import React, { useState } from 'react';
import { Scissors, Sparkles, Check, Copy, MessageCircle, Ruler } from 'lucide-react';
import { craftImg, STYLING_STYLES, STORE_DETAILS } from '../data/storeData';

export const DesignedByYouGuide: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState(STYLING_STYLES[0].id);
  const [kurtaLength, setKurtaLength] = useState<'knee' | 'calf' | 'floor'>('calf');
  const [sleeveType, setSleeveType] = useState<'sleeveless' | 'elbow' | 'bell'>('elbow');
  const [copied, setCopied] = useState(false);

  const currentStyle =
    STYLING_STYLES.find((s) => s.id === selectedStyleId) || STYLING_STYLES[0];

  const getInstructionsText = () => {
    const lengthMap = {
      knee: 'Knee-length (40-42 inches)',
      calf: 'Calf-length (44-46 inches, Classic & Elegant)',
      floor: 'Floor-length (48-52 inches, Grand)',
    };
    const sleeveMap = {
      sleeveless: 'Sleeveless with neat piping finish',
      elbow: '3/4th elbow sleeves with border placement',
      bell: 'Flared bell sleeves with lace detailing',
    };

    return `Vastra Collections - Custom Tailoring Notes:
• Silhouette: ${currentStyle.name}
• Recommended Length: ${lengthMap[kurtaLength]}
• Sleeve Style: ${sleeveMap[sleeveType]}
• Fabric Yardage Provided by Vastra: Kurta 2.5m | Bottom 2.5m | Dupatta 2.25m
• Special Tailor Note: Keep 2-inch side margin inside seams for easy future alterations.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getInstructionsText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareToWhatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hi Vastra Collections! Here is my preferred tailoring silhouette from your "Designed By You" guide:\n\n${getInstructionsText()}\n\nCan you suggest which unstitched suit fabric would suit this best?`
  )}`;

  return (
    <section id="stitching-guide" className="py-16 sm:py-24 bg-white border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6D2D] text-xs font-semibold uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Interactive Tailoring Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
            "Designed by You" Stitching Studio
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Standard ready-made sizes restrict your natural silhouette. With Vastra Collections’ unstitched sets, you choose the cut, neckline, flare, and fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Visual: Atelier Craft Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-[#E8E2D8] shadow-md bg-stone-100">
              <img
                src={craftImg}
                alt="Artisan Indian tailor measuring unstitched silk and cotton fabrics"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E2CCA0] font-semibold">
                  Textile Freedom
                </span>
                <p className="font-serif text-xl sm:text-2xl font-medium mt-1">
                  Generous 2.5m+ Cuts for Seamless Tailoring
                </p>
                <p className="text-xs text-white/80 mt-1">
                  Never worry about short sleeves, tight armholes, or restricted side slits again.
                </p>
              </div>
            </div>

            {/* Guarantee note */}
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-3">
              <Ruler className="w-5 h-5 text-[#C5A059] shrink-0" />
              <p className="text-xs text-stone-600">
                <strong className="text-[#1C2A39]">Boutique Tip:</strong> All Vastra sets include sufficient fabric to comfortably tailor up to a 52-inch bust and custom height extensions.
              </p>
            </div>
          </div>

          {/* Right: Interactive Silhouette & Yardage Customizer */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-xl border border-[#E8E2D8] shadow-xs space-y-6">
            
            {/* 1. Choose Silhouette */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2A39] mb-3">
                1. Select Desired Silhouette:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STYLING_STYLES.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyleId(style.id)}
                    className={`text-left p-3.5 rounded-lg border transition-all ${
                      selectedStyleId === style.id
                        ? 'bg-white border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                        : 'bg-white/60 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-[#1C2A39]">{style.name}</p>
                    <p className="text-[11px] text-[#8C6D2D] mt-0.5">{style.bestFor}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Choose Kurta Length & Sleeve preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2A39] mb-2">
                  2. Kurta Length:
                </label>
                <div className="flex gap-2">
                  {(['knee', 'calf', 'floor'] as const).map((len) => (
                    <button
                      key={len}
                      type="button"
                      onClick={() => setKurtaLength(len)}
                      className={`flex-1 py-2 text-xs font-medium rounded border capitalize transition-colors ${
                        kurtaLength === len
                          ? 'bg-[#1C2A39] text-white border-[#1C2A39]'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2A39] mb-2">
                  3. Sleeve Styling:
                </label>
                <div className="flex gap-2">
                  {(['sleeveless', 'elbow', 'bell'] as const).map((sleeve) => (
                    <button
                      key={sleeve}
                      type="button"
                      onClick={() => setSleeveType(sleeve)}
                      className={`flex-1 py-2 text-xs font-medium rounded border capitalize transition-colors ${
                        sleeveType === sleeve
                          ? 'bg-[#1C2A39] text-white border-[#1C2A39]'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {sleeve}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Tailor Instruction Slip & Yardage Confirmation */}
            <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#E8E2D8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1C2A39] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Custom Tailor Instruction Slip</span>
                </span>
                <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">
                  Fabric Yardage Guaranteed
                </span>
              </div>

              <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded font-mono leading-relaxed border border-stone-200/60 whitespace-pre-line">
                {getInstructionsText()}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1C2A39] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied for Your Tailor!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Notes for Tailor</span>
                    </>
                  )}
                </button>

                <a
                  href={shareToWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Stylist on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
