import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Sparkles, X, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES_INFO } from '../data/storeData';
import { ProductCard } from './ProductCard';

interface ShopCatalogProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  onResetSearch: () => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ShopCatalog: React.FC<ShopCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onResetSearch,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Available fabrics & occasions
  const fabrics = ['all', 'Pure Cotton', 'Silk', 'Georgette'];
  const occasions = ['all', 'Daily & Office Wear', 'Festive & Wedding', 'Party & Evening Wear'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.collectionId !== selectedCategory) {
        return false;
      }
      // Fabric match
      if (selectedFabric !== 'all') {
        if (!item.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) {
          return false;
        }
      }
      // Occasion match
      if (selectedOccasion !== 'all') {
        if (!item.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesFabric = item.fabric.toLowerCase().includes(q);
        const matchesWork = item.work.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesFabric && !matchesWork && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedFabric, selectedOccasion, searchQuery, sortBy]);

  const activeCategoryInfo = CATEGORIES_INFO.find((c) => c.id === selectedCategory);

  const resetAllFilters = () => {
    onSelectCategory('all');
    setSelectedFabric('all');
    setSelectedOccasion('all');
    setSortBy('featured');
    onResetSearch();
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedFabric !== 'all' ||
    selectedOccasion !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Tabs */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unstitched Suit Sets & Kurti Material</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2A39] font-normal">
            Boutique Catalog
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every set contains unstitched fabrics for Kurta, Bottom, and Dupatta—empowering you to tailor your exact cut.
          </p>
        </div>

        {/* Collection Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#1C2A39] text-[#FAF8F5] shadow-xs'
                : 'bg-white text-stone-700 border border-[#E8E2D8] hover:border-stone-400'
            }`}
          >
            All Sets ({PRODUCTS.length})
          </button>

          {CATEGORIES_INFO.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1C2A39] text-[#FAF8F5] shadow-xs'
                  : 'bg-white text-stone-700 border border-[#E8E2D8] hover:border-stone-400'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Banner if filtered */}
        {activeCategoryInfo && (
          <div className="mb-8 p-4 sm:p-5 rounded-xl bg-white border border-[#C5A059]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C6D2D] font-bold">
                {activeCategoryInfo.subtitle} • {activeCategoryInfo.tag}
              </span>
              <h3 className="font-serif text-xl text-[#1C2A39] font-semibold">
                {activeCategoryInfo.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1 max-w-2xl font-normal">
                {activeCategoryInfo.description}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-xs text-stone-500 font-medium">Boutique Range:</span>
              <p className="font-serif text-lg font-bold text-[#1C2A39]">
                {activeCategoryInfo.priceRange}
              </p>
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#E8E2D8] mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Fabric Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-stone-500 font-medium">Fabric:</span>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="bg-[#FAF8F5] border border-stone-200 rounded px-2.5 py-1 text-xs text-stone-700 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Fabrics</option>
                <option value="Cotton">Pure Cotton / Cambric</option>
                <option value="Silk">Banarasi & Chanderi Silk</option>
                <option value="Georgette">Viscose Georgette</option>
              </select>
            </div>

            {/* Occasion Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-stone-500 font-medium">Occasion:</span>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="bg-[#FAF8F5] border border-stone-200 rounded px-2.5 py-1 text-xs text-stone-700 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Occasions</option>
                <option value="Daily">Daily & Office Wear</option>
                <option value="Festive">Festive & Wedding</option>
                <option value="Party">Party & Evening</option>
              </select>
            </div>

            {/* Clear filters trigger */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs text-[#8C6D2D] hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Right Side: Sort By & Result count */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto text-xs">
            <span className="text-stone-500">
              Showing <strong className="text-[#1C2A39]">{filteredProducts.length}</strong> unstitched sets
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-stone-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF8F5] border border-stone-200 rounded px-2.5 py-1 text-xs text-stone-700 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="featured">Featured / Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Search Badge */}
        {searchQuery && (
          <div className="mb-6 flex items-center gap-2 text-xs">
            <span className="text-stone-500">Filtering for:</span>
            <span className="bg-[#1C2A39] text-white px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span>"{searchQuery}"</span>
              <button onClick={onResetSearch} className="hover:text-[#C5A059]">
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-16 text-center border border-[#E8E2D8] space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto text-stone-400">
              <Filter className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-2xl text-[#1C2A39]">No unstitched sets match your selection</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try adjusting your fabric, occasion, or search filters to explore our full boutique collection.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-6 py-2.5 bg-[#1C2A39] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#C5A059] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
