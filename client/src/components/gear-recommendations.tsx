import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  image: string;
  badge: string;
  badgeColor: string;
}

export default function GearRecommendations() {
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "Remington Model 700 ADL",
      description: "Bolt-action rifle perfect for big game hunting with exceptional accuracy and reliability.",
      price: "$649",
      originalPrice: "$749",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      badge: "AI RECOMMENDED",
      badgeColor: "bg-hunter-orange-600"
    },
    {
      id: "2",
      name: "Mystery Ranch Metcalf Pack",
      description: "Professional hunting pack with modular design and superior load distribution for extended hunts.",
      price: "$429",
      originalPrice: "$499",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      badge: "BEST SELLER",
      badgeColor: "bg-green-600"
    },
    {
      id: "3",
      name: "Vortex Viper HD 10x42",
      description: "Premium hunting binoculars with HD optics and rugged construction for all weather conditions.",
      price: "$549",
      originalPrice: "$629",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      badge: "EDITOR'S CHOICE",
      badgeColor: "bg-blue-600"
    }
  ];

  const handleViewProduct = (productId: string) => {
    console.log(`Viewing product: ${productId}`);
    // TODO: Navigate to product detail page
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Featured Gear Recommendations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Curated selections from our AI analysis of top-rated hunting and outdoor equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="bg-forest-800 rounded-2xl border border-forest-700 overflow-hidden hover:border-hunter-orange-500/50 
                         transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${product.badgeColor} text-white text-xs font-semibold px-3 py-1`}>
                    {product.badge}
                  </Badge>
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} className="fill-current" />
                    <span className="text-white text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-hunter-orange-500">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <Button 
                    onClick={() => handleViewProduct(product.id)}
                    className="bg-hunter-orange-600 hover:bg-hunter-orange-700 text-white px-4 py-2 rounded-lg 
                               text-sm font-medium transition-colors"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
