import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Retailer {
  id: string;
  name: string;
  price: string;
  shipping: string;
  savings?: string;
  difference?: string;
  isBest?: boolean;
}

export default function PriceComparison() {
  const retailers: Retailer[] = [
    {
      id: "1",
      name: "Bass Pro Shops",
      price: "$549.99",
      shipping: "Free shipping on orders $50+",
      savings: "Save $79.01",
      isBest: true
    },
    {
      id: "2",
      name: "Cabela's",
      price: "$579.99",
      shipping: "Free shipping on orders $50+",
      savings: "Save $49.01"
    },
    {
      id: "3",
      name: "Amazon",
      price: "$599.95",
      shipping: "Prime 2-day shipping",
      difference: "+$49.96 vs best"
    }
  ];

  const handleGoToRetailer = () => {
    console.log("Navigating to retailer");
    // TODO: Navigate to best retailer
  };

  return (
    <section className="py-20 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Smart Price Comparison
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI continuously monitors prices across retailers to ensure you get the best deals.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-forest-800 rounded-2xl border border-forest-700 overflow-hidden">
          <div className="p-6 border-b border-forest-700">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
                <Store className="text-2xl text-hunter-orange-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Vortex Viper HD 10x42 Binoculars
                </h3>
                <p className="text-gray-300">
                  Premium hunting optics with HD glass and weather-sealed construction
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {retailers.map((retailer) => (
                <div 
                  key={retailer.id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                      <Store className="text-hunter-orange-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{retailer.name}</h4>
                      <p className="text-sm text-gray-300">{retailer.shipping}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${retailer.isBest ? 'text-hunter-orange-500' : 'text-white'}`}>
                      {retailer.price}
                    </div>
                    {retailer.savings && (
                      <div className="text-sm text-green-400">{retailer.savings}</div>
                    )}
                    {retailer.difference && (
                      <div className="text-sm text-red-400">{retailer.difference}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-hunter-orange-600 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">Best Deal Found</h4>
                  <p className="text-sm text-hunter-orange-100">Bass Pro Shops - $549.99</p>
                </div>
                <Button 
                  onClick={handleGoToRetailer}
                  className="bg-white text-hunter-orange-600 px-6 py-2 rounded-lg font-semibold 
                             hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
