import { useState } from "react";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const categories = [
    "Rifles & Firearms", "Optics & Scopes", "Hunting Apparel", "Backpacks & Gear",
    "Boots & Footwear", "Hunting Knives", "Archery Equipment", "Camping Gear"
  ];

  const brands = [
    "Remington", "Winchester", "Vortex", "Leupold", "Sitka", "Under Armour",
    "Mystery Ranch", "YETI", "Benchmade", "Mathews"
  ];

  const sampleProducts: Product[] = [
    {
      id: "1",
      name: "Model 700 ADL Synthetic",
      brand: "Remington",
      price: "$649.99",
      originalPrice: "$749.99",
      rating: 4.8,
      reviewCount: 284,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Rifles & Firearms",
      features: ["Bolt Action", ".308 Winchester", "Synthetic Stock", "24\" Barrel"],
      inStock: true
    },
    {
      id: "2",
      name: "Viper HD 10x42 Binoculars",
      brand: "Vortex",
      price: "$549.99",
      originalPrice: "$629.99",
      rating: 4.9,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Optics & Scopes",
      features: ["HD Glass", "Waterproof", "Rubber Armor", "Lifetime Warranty"],
      inStock: true
    },
    {
      id: "3",
      name: "Metcalf Hunting Pack",
      brand: "Mystery Ranch",
      price: "$429.99",
      originalPrice: "$499.99",
      rating: 4.7,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Backpacks & Gear",
      features: ["5400ci Capacity", "Guide Light Frame", "Overload Shelf", "Modular Design"],
      inStock: true
    },
    {
      id: "4",
      name: "VX-3HD 3.5-10x40 Riflescope",
      brand: "Leupold",
      price: "$399.99",
      originalPrice: "$449.99",
      rating: 4.6,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Optics & Scopes",
      features: ["HD Glass", "CDS-ZL Turrets", "Twilight Max Coating", "Waterproof"],
      inStock: false
    }
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // TODO: Implement actual search functionality
  };

  const handleProductClick = (productId: string) => {
    console.log("Viewing product:", productId);
    // TODO: Navigate to product detail page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Search Header */}
      <section className="bg-forest-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Find Your Perfect Gear
            </h1>
            <p className="text-xl text-forest-200">
              Search our comprehensive database of outdoor and hunting equipment
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search for rifles, scopes, backpacks, boots..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 
                             focus:outline-none focus:border-hunter-orange-500 focus:ring-1 focus:ring-hunter-orange-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-hunter-orange-600 hover:bg-hunter-orange-700 px-8 py-3 rounded-xl font-semibold"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-forest-800 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-hunter-orange-500" />
                <span className="font-semibold text-white">Filters:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-48 bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Search Results ({sampleProducts.length} items)
            </h2>
            <div className="text-gray-300">
              Showing AI-powered recommendations based on your search
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-forest-800 rounded-xl border border-forest-700 overflow-hidden hover:border-hunter-orange-500/50 
                           transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Badge className="bg-red-600 text-white">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gray-600 text-white text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star size={14} className="fill-current" />
                      <span className="text-white text-sm ml-1">
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-forest-200 text-sm mb-3">
                    {product.brand}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} className="bg-hunter-orange-600/20 text-hunter-orange-400 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-hunter-orange-500">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-hunter-orange-600 hover:bg-hunter-orange-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-forest-700 hover:bg-forest-600 px-8 py-3 rounded-xl">
              Load More Results
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}