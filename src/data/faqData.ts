export interface FAQItem {
  id: string;
  category: 'fabric-care' | 'custom-stitching' | 'returns-shipping';
  categoryLabel: string;
  question: string;
  answer: string;
  keyPoints?: string[];
}

export const FAQ_ITEMS: FAQItem[] = [
  // 1. Fabric Care & Maintenance
  {
    id: 'faq-fc-1',
    category: 'fabric-care',
    categoryLabel: 'Fabric Care & Maintenance',
    question: 'How should I wash and care for pure cotton unstitched suits (Pastel Flora collection)?',
    answer:
      'Our Pastel Flora suits are made with 100% pure 60x60 Cambric cotton and natural block prints. For the first wash, we recommend a gentle cold hand dip in salt water to lock the dyes. Afterward, use a mild liquid detergent and dry inside-out in shaded areas. Avoid harsh detergents and direct mid-day sun to maintain original vibrance for years.',
    keyPoints: [
      'First wash: Cold water with a pinch of rock salt',
      'Always line dry inside-out in shade',
      'Medium heat iron on reverse side',
    ],
  },
  {
    id: 'faq-fc-2',
    category: 'fabric-care',
    categoryLabel: 'Fabric Care & Maintenance',
    question: 'What is the recommended cleaning process for Royal Heritage Banarasi and Chanderi silks?',
    answer:
      'All silk suits in our Royal Heritage Series feature genuine woven metallic zari threads and delicate silk yarns. We strictly advise Dry Clean Only. Never machine wash or soak silk pieces. When storing, wrap them in breathable pure muslin or mulmul cloth (not synthetic plastic bags) and air them out twice a year to keep the gold luster radiant.',
    keyPoints: [
      'Strictly Dry Clean Only for Banarasi and Chanderi silk sets',
      'Store wrapped in breathable cotton/muslin cloth',
      'Never spray perfumes directly onto zari borders',
    ],
  },
  {
    id: 'faq-fc-3',
    category: 'fabric-care',
    categoryLabel: 'Fabric Care & Maintenance',
    question: 'How do I care for Contemporary Georgette sets with mirrors and sequins?',
    answer:
      'Our georgette outfits feature delicate micro-sequins and genuine mirror embroidery. Dry cleaning is highly recommended. If ironing at home, use low steam on the reverse side with a protective pressing cloth over the embroidery to prevent snagging or heat damage to the sequence work.',
    keyPoints: [
      'Dry clean recommended to protect delicate mirror embroidery',
      'Iron on reverse with a cotton pressing cloth',
      'Hang on padded hangers to avoid shoulder stretch',
    ],
  },

  // 2. Custom Stitching & Tailoring
  {
    id: 'faq-cs-1',
    category: 'custom-stitching',
    categoryLabel: 'Custom Stitching & Tailoring',
    question: 'How much fabric is provided in an unstitched suit set? Will it fit plus sizes?',
    answer:
      'Every Vastra Collections unstitched suit set includes generous yardage designed to comfortably tailor up to a 52-inch bust and custom tall heights. Standard cuts include: Kurta/Top fabric (2.5 to 2.7 meters), Bottom/Salwar fabric (2.4 to 2.5 meters), and a full-length flowing Dupatta (2.25 to 2.5 meters). There is ample room for custom flares, long sleeves, and wide-leg palazzos.',
    keyPoints: [
      'Kurta Fabric: 2.5m – 2.7m (Fits bust up to 52")',
      'Bottom Fabric: 2.4m – 2.5m (Salwar, Palazzo, or Pants)',
      'Dupatta: 2.25m – 2.5m full length',
    ],
  },
  {
    id: 'faq-cs-2',
    category: 'custom-stitching',
    categoryLabel: 'Custom Stitching & Tailoring',
    question: 'What is the difference between Unstitched and Semi-Stitched fabrics?',
    answer:
      'Unlike semi-stitched sets (which come with pre-cut necklines that limit your styling and rarely fit properly), Vastra Collections offers 100% Unstitched fabric lengths. This gives you and your tailor complete freedom to choose the exact neckline depth, armhole contour, kurta length, and sleeve style (bell sleeves, 3/4th, sleeveless) tailored to your unique measurements.',
    keyPoints: [
      '100% Unstitched: Zero pre-cut necklines or pre-sewn side seams',
      'Complete liberty to customize necklines, sleeves, and slits',
      'No awkward compromises on bust or shoulder fittings',
    ],
  },
  {
    id: 'faq-cs-3',
    category: 'custom-stitching',
    categoryLabel: 'Custom Stitching & Tailoring',
    question: 'Do you provide tailoring services or style consultations in New Delhi?',
    answer:
      'Yes! If you visit our physical boutique at B-87 Chander Vihar, Vikaspuri Extn (New Delhi), we provide custom tailoring measurement consultations with experienced boutique masters. For outstation online customers, our design team offers free styling advice via WhatsApp and video calls to help you instruct your local tailor accurately.',
    keyPoints: [
      'In-person master measurement at our New Delhi boutique',
      'Free WhatsApp video consultations for outstation patrons',
      'Detailed downloadable Tailor Instruction Slips from our "Designed by You" guide',
    ],
  },

  // 3. Return Policies & Shipping
  {
    id: 'faq-rs-1',
    category: 'returns-shipping',
    categoryLabel: 'Returns, Exchanges & Shipping',
    question: 'What is your return and exchange policy on unstitched suit sets?',
    answer:
      'We offer a transparent 7-Day Hassle-Free Return & Exchange Policy from the date of delivery. Because unstitched fabric is versatile and uncut, you can return or exchange the set provided the fabric is unwashed, uncut, and in its original fold with boutique tags intact. Once picked up and verified, refunds are credited within 3-5 business days.',
    keyPoints: [
      '7-Day return and exchange window from delivery date',
      'Fabric must be uncut, unwashed, and with tags attached',
      'Reverse pickup arranged directly from your doorstep',
    ],
  },
  {
    id: 'faq-rs-2',
    category: 'returns-shipping',
    categoryLabel: 'Returns, Exchanges & Shipping',
    question: 'How fast is delivery? Do you offer Cash on Delivery (COD)?',
    answer:
      'Yes, Cash on Delivery (COD) is available across major PIN codes in India. Orders within Delhi NCR (including Vikaspuri, Rajouri Garden, Gurgaon, and Noida) are delivered within 24–48 hours. Orders to all other Indian cities arrive within 3 to 5 business days via trusted express air couriers with live SMS/WhatsApp tracking.',
    keyPoints: [
      'Delhi NCR: 24 to 48 Hours express courier dispatch',
      'Rest of India: 3 to 5 Business Days via Express Air',
      'Cash on Delivery (COD) and Instant UPI accepted',
      'Free shipping on all orders above ₹999',
    ],
  },
  {
    id: 'faq-rs-3',
    category: 'returns-shipping',
    categoryLabel: 'Returns, Exchanges & Shipping',
    question: 'What if the fabric arrives with a defect or the color looks different?',
    answer:
      'Every fabric set undergoes a rigorous two-step quality check before dispatch from our Delhi boutique. In the rare case of transit damage or manufacturing flaw, simply message us on WhatsApp (+91 7428942103) with a quick photo within 48 hours. We arrange a free priority replacement or 100% instant refund immediately.',
    keyPoints: [
      'Two-step manual quality inspection before packaging',
      'Immediate priority replacement for genuine defects',
      'Direct WhatsApp helpline support with boutique manager',
    ],
  },
];
