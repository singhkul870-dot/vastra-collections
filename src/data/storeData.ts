import { Product, StoreDetails, Testimonial } from '../types';
import heroBannerImg from '../assets/images/vastra_hero_banner_1791539940047.jpg';
import pastelFloraImg from '../assets/images/pastel_flora_cotton_1791539959356.jpg';
import royalHeritageImg from '../assets/images/royal_heritage_silk_1791539979182.jpg';
import georgetteImg from '../assets/images/contemporary_georgette_1791540006107.jpg';
import craftImg from '../assets/images/boutique_craft_1791540035471.jpg';

export { heroBannerImg, pastelFloraImg, royalHeritageImg, georgetteImg, craftImg };

export const STORE_DETAILS: StoreDetails = {
  name: 'Vastra Collections',
  tagline: 'Unstitched Elegance. Designed by You.',
  addressLine1: 'B-87 CHANDER VIHAR, VIKASPURI EXTN, NILOTHI EXTN',
  addressLine2: 'Shop No. 12, First Floor, Central Market, Rajouri Garden & Vikaspuri',
  city: 'New Delhi, India',
  pin: '110041',
  phone: '+91 7428942103',
  phoneRaw: '+917428942103',
  email: 'singhkul870@gmail.com',
  supportEmail: 'support@vastracollections.com',
  hoursMonSat: '10:30 AM – 8:00 PM',
  hoursSun: 'Closed (Weekly Off)',
  domain: 'vastracollections.com',
  whatsappNumber: '917428942103',
};

export const ABOUT_US_CONTENT = `Welcome to Vastra Collections—where tradition meets your personal style statement. Founded with a passion for celebrating authentic Indian textiles, we curate the finest range of unstitched and trendy ladies' suits. We believe that true fashion shouldn't be constrained by standard factory sizes. By offering premium, unstitched fabric sets, we empower every woman to stitch her own story, ensuring a perfect fit and a unique style. From breathable day-wear cottons to opulent festive silks, our collections are handpicked to make you look effortlessly elegant on every occasion.`;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Anjali Sharma',
    tag: 'Verified Customer',
    review:
      'I ordered three cotton suit sets from Vastra Collections, and the fabric quality is exceptional. Even after multiple washes, the colors are as bright as day one. The digital print designs are very modern and completely different from what you find in regular markets!',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    itemBought: 'Pastel Flora Hand-Block Cotton Suit',
  },
  {
    id: 'rev-2',
    name: 'Priya Patel',
    tag: 'Online Shopper',
    review:
      'The absolute best place for unstitched festive wear! The Chanderi silk fabric I bought for Diwali looked so rich and premium. The shipment arrived promptly, and the packaging was lovely. Will definitely shop again!',
    rating: 5,
    date: '1 month ago',
    verified: true,
    itemBought: 'Royal Banarasi Zari Silk Suit Set',
  },
  {
    id: 'rev-3',
    name: 'Meenakshi Sundaram',
    tag: 'Verified Buyer',
    review:
      'Unstitched suits give me the freedom to get my tailor to make flared Pakistani sleeves and cigarette pants. The pure georgette fabric from Vastra with mirror-work is simply breathtaking.',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    itemBought: 'Emerald Mirror-Work Georgette Set',
  },
];

export const CATEGORIES_INFO = [
  {
    id: 'pastel-flora',
    title: 'The Pastel Flora Collection',
    subtitle: 'Premium Cotton Suits',
    priceRange: '₹799 – ₹1,499',
    tag: 'Summer & Daily Wear',
    description:
      '100% pure premium cotton unstitched suit material featuring delicate floral block prints. Paired with a lightweight, flowing chiffon dupatta. Ideal for summer and daily office wear.',
    image: pastelFloraImg,
    count: '14 Designs',
  },
  {
    id: 'royal-heritage',
    title: 'Royal Heritage Series',
    subtitle: 'Festive & Silk Outfits',
    priceRange: '₹1,100 – ₹6,500',
    tag: 'Weddings & Celebrations',
    description:
      'Luxurious unstitched Banarasi and Chanderi silk suit sets complete with heavy zari borders and intricate woven thread embroidery. Perfect for weddings, festivals, and parties.',
    image: royalHeritageImg,
    count: '18 Designs',
  },
  {
    id: 'contemporary-georgette',
    title: 'Contemporary Georgette Sets',
    subtitle: 'Trendy Party Wear',
    priceRange: '₹2,200 – ₹4,000',
    tag: 'Modern Festive Wear',
    description:
      'Lightweight, highly durable georgette fabrics featuring modern digital prints, sequins, and mirror-work detailing for the trendiest festive look.',
    image: georgetteImg,
    count: '12 Designs',
  },
];

export const PRODUCTS: Product[] = [
  // 1. Pastel Flora Collection
  {
    id: 'vas-pf-01',
    sku: 'VC-PF-799-01',
    name: 'Gulabi Bagh Handblock Pure Cotton Suit',
    collectionId: 'pastel-flora',
    collectionTitle: 'The Pastel Flora Collection',
    price: 999,
    originalPrice: 1499,
    fabric: '100% Pure Cambric Cotton',
    description:
      'Delicate blush pink floral block print on soft breathable cotton with featherlight ombre chiffon dupatta.',
    longDescription:
      'Part of our signature Pastel Flora series. Crafted with 60x60 high-thread count pure cotton fabric that stays ultra-breathable even in peak Indian summers. Features traditional Sanganeri hand block-inspired motifs, accompanied by a flowing printed chiffon dupatta and solid cotton matching bottom.',
    image: pastelFloraImg,
    dimensions: {
      kurta: '2.5 Meters (Full Length Suit/Anarkali)',
      bottom: '2.5 Meters (Salwar/Plazo/Pants)',
      dupatta: '2.25 Meters (Pure Flowing Chiffon)',
    },
    work: 'Traditional Hand-Block Floral Printing',
    occasion: 'Daily & Office Wear',
    colorName: 'Blush Peach & Sage',
    colorHex: '#F4D8CD',
    inStock: true,
    isBestseller: true,
    isNew: false,
    rating: 4.9,
    reviewsCount: 38,
    care: 'Gentle hand wash with mild liquid detergent. Dry in shade.',
  },
  {
    id: 'vas-pf-02',
    sku: 'VC-PF-899-02',
    name: 'Neelkamal Sage Floral Daily Cotton Suit',
    collectionId: 'pastel-flora',
    collectionTitle: 'The Pastel Flora Collection',
    price: 849,
    originalPrice: 1299,
    fabric: '100% Pure Breathable Cotton',
    description:
      'Soft mint sage fabric with subtle lavender floral vines and contrast border trims for tailored neckline accents.',
    longDescription:
      'Engineered for maximum work-day comfort. The unstitched fabric gives you complete liberty to fashion straight kurtis with lace hems or relaxed A-line silhouettes.',
    image: pastelFloraImg,
    dimensions: {
      kurta: '2.5 Meters',
      bottom: '2.4 Meters',
      dupatta: '2.25 Meters',
    },
    work: 'Botanical Block Print with Zari Neck Patti',
    occasion: 'Daily & Office Wear',
    colorName: 'Sage Mint & Lavender',
    colorHex: '#C5D6C6',
    inStock: true,
    isBestseller: false,
    isNew: true,
    rating: 4.8,
    reviewsCount: 22,
    care: 'First wash separate. Cold wash recommended.',
  },
  {
    id: 'vas-pf-03',
    sku: 'VC-PF-1499-03',
    name: 'Kesar Chameli Premium Lawn Cotton Set',
    collectionId: 'pastel-flora',
    collectionTitle: 'The Pastel Flora Collection',
    price: 1399,
    originalPrice: 1999,
    fabric: 'Superfine Mulberry Cotton Lawn',
    description:
      'Airy pastel saffron and ivory suit with intricate shadow embroidery and scalloped chiffon dupatta.',
    longDescription:
      'Elevated cotton luxury with subtle threadwork near the collar zone and a premium lightweight drape. Ideal for family gatherings and festive daytime lunches.',
    image: pastelFloraImg,
    dimensions: {
      kurta: '2.6 Meters',
      bottom: '2.5 Meters',
      dupatta: '2.3 Meters',
    },
    work: 'Intricate Shadow Resham Embroidery',
    occasion: 'Daily & Festive',
    colorName: 'Soft Amber & Ivory',
    colorHex: '#F6E5B8',
    inStock: true,
    isBestseller: true,
    isNew: false,
    rating: 5.0,
    reviewsCount: 45,
    care: 'Dry clean for first wash, then gentle hand wash.',
  },

  // 2. Royal Heritage Series
  {
    id: 'vas-rh-01',
    sku: 'VC-RH-3500-01',
    name: 'Rajwada Banarasi Woven Zari Silk Suit',
    collectionId: 'royal-heritage',
    collectionTitle: 'Royal Heritage Series',
    price: 3650,
    originalPrice: 5200,
    fabric: 'Authentic Banarasi Katan Silk',
    description:
      'Regal midnight sapphire silk unstitched suit with opulent golden zari border and peacock motif pallu.',
    longDescription:
      'An heirloom festive treasure from our Royal Heritage Series. Pure woven silk base embellished with authentic antique gold zari weave that reflects timeless royal Indian opulence. Includes heavy Banarasi brocade dupatta and premium Santoon inner/bottom fabric.',
    image: royalHeritageImg,
    dimensions: {
      kurta: '2.5 Meters (Pure Banarasi Silk)',
      bottom: '2.5 Meters (Premium Silk Santoon)',
      dupatta: '2.5 Meters (Rich Brocade Zari Border)',
    },
    work: 'Woven Antique Gold Zari & Resham Kadwa',
    occasion: 'Festive & Wedding',
    colorName: 'Royal Midnight Navy',
    colorHex: '#1C2A44',
    inStock: true,
    isBestseller: true,
    isNew: false,
    rating: 4.95,
    reviewsCount: 54,
    care: 'Strictly dry clean only to preserve gold zari lustre.',
  },
  {
    id: 'vas-rh-02',
    sku: 'VC-RH-4800-02',
    name: 'Chanderi Gold Flora Festive Suit Set',
    collectionId: 'royal-heritage',
    collectionTitle: 'Royal Heritage Series',
    price: 2450,
    originalPrice: 3800,
    fabric: 'Pure Handloom Chanderi Silk Cotton',
    description:
      'Crimson wine Chanderi fabric with delicate booti weaving, rich zari neck applique and sheer organza dupatta.',
    longDescription:
      'Combining the lightness of fine cotton with the shimmer of pure silk. This unstitched set drapes regally and is adorned with shimmering thread embroidery along the hem and sleeves.',
    image: royalHeritageImg,
    dimensions: {
      kurta: '2.5 Meters',
      bottom: '2.5 Meters',
      dupatta: '2.3 Meters',
    },
    work: 'Handcrafted Zari Booti & Embroidered Borders',
    occasion: 'Festive & Wedding',
    colorName: 'Crimson Burgundy',
    colorHex: '#6F1D2F',
    inStock: true,
    isBestseller: false,
    isNew: true,
    rating: 4.85,
    reviewsCount: 19,
    care: 'Dry clean recommended.',
  },
  {
    id: 'vas-rh-03',
    sku: 'VC-RH-5900-03',
    name: 'Nawabzada Katan Silk Bridal Edition',
    collectionId: 'royal-heritage',
    collectionTitle: 'Royal Heritage Series',
    price: 5200,
    originalPrice: 6500,
    fabric: 'Pure Mulberry Katan Silk',
    description:
      'Emerald jade and rich antique champagne gold silk with heavy heritage temple border weaving.',
    longDescription:
      'The crown jewel of our silk line. Created for brides, festive hostesses, and celebratory soirees. The unstitched canvas lets you tailor royal Angrakha cuts, straight trousers, or regal floor-length kurtas.',
    image: royalHeritageImg,
    dimensions: {
      kurta: '2.7 Meters',
      bottom: '2.5 Meters',
      dupatta: '2.5 Meters (Heavy Meenakari Zari)',
    },
    work: 'Intricate Gold Zari Meenakari Weave',
    occasion: 'Festive & Wedding',
    colorName: 'Emerald Jade & Gold',
    colorHex: '#174A3D',
    inStock: true,
    isBestseller: true,
    isNew: false,
    rating: 5.0,
    reviewsCount: 42,
    care: 'Dry clean only. Store wrapped in muslin cloth.',
  },

  // 3. Contemporary Georgette Sets
  {
    id: 'vas-cg-01',
    sku: 'VC-CG-2600-01',
    name: 'Firozi Shimmer Mirror-Work Georgette Suit',
    collectionId: 'contemporary-georgette',
    collectionTitle: 'Contemporary Georgette Sets',
    price: 2850,
    originalPrice: 3800,
    fabric: 'Featherlight Viscose Georgette',
    description:
      'Luminous emerald teal georgette with genuine mirror detailing, tone-on-tone resham work and embellished dupatta.',
    longDescription:
      'Youthful, lively, and impeccably flattering. The fluid drape of our premium georgette fabric moves gracefully with you. Adorned with delicate mirror work and sparkling micro-sequins, paired with a matching flowing georgette dupatta.',
    image: georgetteImg,
    dimensions: {
      kurta: '2.5 Meters (Georgette with Heavy Embroidery)',
      bottom: '2.5 Meters (Crepe Silk Bottom + Inner Fabric)',
      dupatta: '2.25 Meters (Scalloped Border Georgette)',
    },
    work: 'Real Mirror Embroidery & Micro-Sequins',
    occasion: 'Party & Evening Wear',
    colorName: 'Forest Emerald & Champagne',
    colorHex: '#135846',
    inStock: true,
    isBestseller: true,
    isNew: true,
    rating: 4.9,
    reviewsCount: 31,
    care: 'Dry clean recommended. Gentle steam iron on reverse.',
  },
  {
    id: 'vas-cg-02',
    sku: 'VC-CG-3200-02',
    name: 'Noor Rose Gold Digital Sequin Georgette',
    collectionId: 'contemporary-georgette',
    collectionTitle: 'Contemporary Georgette Sets',
    price: 3190,
    originalPrice: 4200,
    fabric: 'Pure Georgette with Butter Silk Lining Included',
    description:
      'Modern digital floral artwork fused with rose-gold cutdana and sequin sprays for high-fashion cocktail events.',
    longDescription:
      'Contemporary aesthetics at its finest. Modern digital artwork meets traditional Indian artisanal hand-sewn sequins. Perfect for sangeet nights, party wear, and stylish festive dinners.',
    image: georgetteImg,
    dimensions: {
      kurta: '2.5 Meters',
      bottom: '2.5 Meters',
      dupatta: '2.25 Meters',
    },
    work: 'Digital Print with Hand Cutdana & Sequin Detailing',
    occasion: 'Party & Evening Wear',
    colorName: 'Dusty Rose & Champagne Gold',
    colorHex: '#C5A089',
    inStock: true,
    isBestseller: false,
    isNew: true,
    rating: 4.88,
    reviewsCount: 27,
    care: 'Dry clean only.',
  },
  {
    id: 'vas-cg-03',
    sku: 'VC-CG-2400-03',
    name: 'Sultana Lavender Lucknowi Georgette Set',
    collectionId: 'contemporary-georgette',
    collectionTitle: 'Contemporary Georgette Sets',
    price: 2490,
    originalPrice: 3400,
    fabric: 'Fox Georgette with Chikankari Touch',
    description:
      'Pastel lilac georgette adorned with delicate thread work motifs, pearl buttons and cascading dupatta.',
    longDescription:
      'Subtle glamour for day-to-night transitions. Breathable, crease-resistant georgette fabric that gives your tailor complete ease in sculpting Pakistani slits or flared anarkalis.',
    image: georgetteImg,
    dimensions: {
      kurta: '2.5 Meters',
      bottom: '2.5 Meters',
      dupatta: '2.25 Meters',
    },
    work: 'Chikankari Threadwork with Mukaish Shimmer',
    occasion: 'Party & Festive',
    colorName: 'Lilac Orchid',
    colorHex: '#C4B1D4',
    inStock: true,
    isBestseller: false,
    isNew: false,
    rating: 4.75,
    reviewsCount: 16,
    care: 'Gentle dry clean or mild hand dip.',
  },

  // 4. Trendy Kurti Material & Boutique Cuts
  {
    id: 'vas-km-01',
    sku: 'VC-KM-899-01',
    name: 'Handcrafted Indigo Dabu Kurti Material',
    collectionId: 'pastel-flora',
    collectionTitle: 'The Pastel Flora Collection',
    price: 799,
    originalPrice: 1199,
    fabric: 'Pure Cotton Indigo Dabu',
    description:
      'Natural indigo block printed kurti fabric material with wooden buttons and sleeve border strips.',
    longDescription:
      '2.5 meters of pure, unadulterated artisanal cotton. Gives your tailor ample fabric for standard, long-slit, or bell-sleeve kurti designs.',
    image: pastelFloraImg,
    dimensions: {
      kurta: '2.5 Meters',
      bottom: 'Fabric sold separately',
      dupatta: 'Optional add-on',
    },
    work: 'Natural Vegetable Indigo Mud-Resist Block Print',
    occasion: 'Everyday Casual & Office',
    colorName: 'Indigo Blue & Ecru',
    colorHex: '#264653',
    inStock: true,
    isBestseller: true,
    isNew: false,
    rating: 4.9,
    reviewsCount: 52,
    care: 'Wash separately in cold water.',
  },
];

export const STYLING_STYLES = [
  {
    id: 'pakistani-straight',
    name: 'Straight Long Kurta with Cigarette Pants',
    recommendedFabric: '2.5m Kurta + 2.5m Pants',
    bestFor: 'Office, High Tea & Daily Sophistication',
    features: ['High side slits', 'Structured collar or V-neck', 'Tapered ankle pants'],
  },
  {
    id: 'anarkali-kalidar',
    name: 'Kalidar Flared Anarkali with Churidar',
    recommendedFabric: '3.0m - 3.5m Flared Kurta + 2.5m Bottom',
    bestFor: 'Weddings, Sangeet & Festive Galas',
    features: ['Graceful 16-kali flare', 'Deep back neck with latkan tassels', 'Gathered churidar'],
  },
  {
    id: 'contemporary-palazzo',
    name: 'A-Line Kurti with Flared Palazzo',
    recommendedFabric: '2.5m Kurta + 2.5m Palazzo',
    bestFor: 'Summer Ease, Casual Gatherings & Puja',
    features: ['Wide leg breathing room', 'Minimalist neckline', 'Effortless all-day movement'],
  },
  {
    id: 'angrakha-wrap',
    name: 'Royal Angrakha Overlap Silhouette',
    recommendedFabric: '2.8m Kurta + 2.5m Salwar/Pants',
    bestFor: 'Festive Banarasi & Chanderi Silks',
    features: ['Diagonal crossover tie-up', 'Antique gold border accents', 'Regal posture'],
  },
];
