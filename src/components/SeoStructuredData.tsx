import React from 'react';
import { STORE_DETAILS } from '../data/storeData';
import { FAQ_ITEMS } from '../data/faqData';

export const SeoStructuredData: React.FC = () => {
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: STORE_DETAILS.name,
    description:
      "Premium Women's Ethnic Wear Boutique in New Delhi. High-Quality Unstitched Salwar Suits, Festive Silks, and Trendy Kurti Material.",
    url: `https://${STORE_DETAILS.domain}`,
    telephone: STORE_DETAILS.phone,
    email: STORE_DETAILS.email,
    priceRange: '₹799 - ₹6,500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: STORE_DETAILS.addressLine1,
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: STORE_DETAILS.pin,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6517',
      longitude: '77.0700',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:30',
        closes: '20:00',
      },
    ],
    department: [
      {
        '@type': 'Department',
        name: 'The Pastel Flora Collection',
        description: '100% pure premium cotton unstitched suit material with floral block prints and chiffon dupatta.',
      },
      {
        '@type': 'Department',
        name: 'Royal Heritage Series',
        description: 'Luxurious unstitched Banarasi and Chanderi silk suit sets with heavy zari borders.',
      },
      {
        '@type': 'Department',
        name: 'Contemporary Georgette Sets',
        description: 'Lightweight georgette fabrics featuring digital prints, sequins, and mirror work.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
