import { useState } from "react";
import { MapPin, Calendar, Target, Users, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface GearRecommendation {
  id: string;
  category: string;
  items: {
    id: string;
    name: string;
    brand: string;
    price: string;
    priority: 'essential' | 'recommended' | 'optional';
    image: string;
    reason: string;
  }[];
}

export default function HuntPlanningPage() {
  const [huntDetails, setHuntDetails] = useState({
    location: "",
    gameType: "",
    season: "",
    duration: "",
    groupSize: "",
    experienceLevel: "",
    budget: "",
    additionalNotes: ""
  });

  const [showRecommendations, setShowRecommendations] = useState(false);

  const gameTypes = [
    "Whitetail Deer", "Mule Deer", "Elk", "Moose", "Black Bear", "Wild Turkey",
    "Waterfowl", "Upland Game", "Wild Boar", "Antelope"
  ];

  const seasons = ["Early Season", "Pre-Rut", "Rut", "Post-Rut", "Late Season"];
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  const sampleRecommendations: GearRecommendation[] = [
    {
      id: "firearms",
      category: "Firearms & Optics",
      items: [
        {
          id: "1",
          name: "Model 700 ADL .308",
          brand: "Remington",
          price: "$649",
          priority: "essential",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Perfect for Montana elk hunting with excellent range and stopping power"
        },
        {
          id: "2",
          name: "VX-3HD 3.5-10x40",
          brand: "Leupold",
          price: "$399",
          priority: "essential",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Clear optics for long-range shots in varying light conditions"
        }
      ]
    },
    {
      id: "clothing",
      category: "Hunting Apparel",
      items: [
        {
          id: "3",
          name: "Fanatic Jacket",
          brand: "Sitka",
          price: "$449",
          priority: "recommended",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Silent, warm insulation for cold mountain mornings"
        },
        {
          id: "4",
          name: "Mountain Pants",
          brand: "Sitka",
          price: "$279",
          priority: "recommended",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Durable, quiet fabric designed for mountain terrain"
        }
      ]
    },
    {
      id: "gear",
      category: "Essential Gear",
      items: [
        {
          id: "5",
          name: "Metcalf Pack",
          brand: "Mystery Ranch",
          price: "$429",
          priority: "essential",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Large capacity for multi-day hunts with meat hauling capability"
        },
        {
          id: "6",
          name: "Ranger 10x42",
          brand: "Vortex",
          price: "$199",
          priority: "recommended",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
          reason: "Lightweight binoculars for spotting game at distance"
        }
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setHuntDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateRecommendations = () => {
    console.log("Generating recommendations for hunt:", huntDetails);
    setShowRecommendations(true);
    // TODO: Call AI service to generate personalized recommendations
  };

  const handleAddToCart = (itemId: string) => {
    console.log("Adding item to cart:", itemId);
    // TODO: Add item to shopping cart
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'essential': return 'bg-red-600';
      case 'recommended': return 'bg-hunter-orange-600';
      case 'optional': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  const totalEstimatedCost = sampleRecommendations
    .flatMap(cat => cat.items)
    .reduce((sum, item) => sum + parseInt(item.price.replace('$', '')), 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-forest-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Plan Your Epic Hunt
            </h1>
            <p className="text-xl text-forest-200">
              Get personalized gear recommendations based on your hunting location, season, and game type
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hunt Details Form */}
            <Card className="bg-forest-800 rounded-2xl border border-forest-700 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Target className="mr-3 text-hunter-orange-500" size={24} />
                Hunt Details
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Hunting Location
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Montana, Wyoming, Colorado"
                      value={huntDetails.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      <Target size={16} className="inline mr-1" />
                      Game Type
                    </label>
                    <Select value={huntDetails.gameType} onValueChange={(value) => handleInputChange('gameType', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select game type" />
                      </SelectTrigger>
                      <SelectContent>
                        {gameTypes.map((game) => (
                          <SelectItem key={game} value={game}>
                            {game}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      <Calendar size={16} className="inline mr-1" />
                      Season
                    </label>
                    <Select value={huntDetails.season} onValueChange={(value) => handleInputChange('season', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        {seasons.map((season) => (
                          <SelectItem key={season} value={season}>
                            {season}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      <Clock size={16} className="inline mr-1" />
                      Duration (days)
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 5"
                      value={huntDetails.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      <Users size={16} className="inline mr-1" />
                      Group Size
                    </label>
                    <Input
                      type="number"
                      placeholder="Number of hunters"
                      value={huntDetails.groupSize}
                      onChange={(e) => handleInputChange('groupSize', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest-200 mb-2">
                      Experience Level
                    </label>
                    <Select value={huntDetails.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-200 mb-2">
                    Budget Range ($)
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., $1000-$3000"
                    value={huntDetails.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-200 mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    placeholder="Any specific requirements, preferences, or conditions..."
                    value={huntDetails.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                  />
                </div>

                <Button
                  onClick={handleGenerateRecommendations}
                  className="w-full bg-hunter-orange-600 hover:bg-hunter-orange-700 py-3 text-lg font-semibold"
                >
                  <Package className="mr-2" size={20} />
                  Generate AI Recommendations
                </Button>
              </div>
            </Card>

            {/* Preview/Summary */}
            <Card className="bg-forest-800 rounded-2xl border border-forest-700 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Hunt Summary
              </h2>

              {huntDetails.gameType && huntDetails.location ? (
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-hunter-orange-500 mb-2">Hunt Details</h3>
                    <div className="space-y-2 text-forest-200">
                      {huntDetails.gameType && (
                        <p><span className="font-medium">Game:</span> {huntDetails.gameType}</p>
                      )}
                      {huntDetails.location && (
                        <p><span className="font-medium">Location:</span> {huntDetails.location}</p>
                      )}
                      {huntDetails.season && (
                        <p><span className="font-medium">Season:</span> {huntDetails.season}</p>
                      )}
                      {huntDetails.duration && (
                        <p><span className="font-medium">Duration:</span> {huntDetails.duration} days</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-hunter-orange-600/20 rounded-lg p-4 border border-hunter-orange-500/30">
                    <h4 className="font-semibold text-hunter-orange-400 mb-2">AI Analysis Preview</h4>
                    <p className="text-sm text-forest-200">
                      Based on your {huntDetails.gameType.toLowerCase()} hunt in {huntDetails.location} during {huntDetails.season?.toLowerCase()}, 
                      our AI will recommend specialized gear for mountain terrain, weather conditions, and long-range shooting opportunities.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <Package size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Fill in your hunt details to see a personalized summary and get AI-powered gear recommendations.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Recommendations Section */}
          {showRecommendations && (
            <div className="mt-12">
              <div className="bg-forest-800 rounded-2xl border border-forest-700 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-semibold text-white">
                    Personalized Gear Recommendations
                  </h2>
                  <div className="text-right">
                    <p className="text-sm text-forest-200">Estimated Total Cost</p>
                    <p className="text-2xl font-bold text-hunter-orange-500">${totalEstimatedCost.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {sampleRecommendations.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Package className="mr-2 text-hunter-orange-500" size={20} />
                        {category.category}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.items.map((item) => (
                          <Card key={item.id} className="bg-gray-700 rounded-xl border border-gray-600 overflow-hidden">
                            <div className="flex">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-24 h-24 object-cover"
                              />
                              <div className="p-4 flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold text-white">{item.name}</h4>
                                    <p className="text-sm text-gray-300">{item.brand}</p>
                                  </div>
                                  <Badge className={`${getPriorityColor(item.priority)} text-white text-xs`}>
                                    {item.priority.toUpperCase()}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-300 mb-3">{item.reason}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-lg font-bold text-hunter-orange-500">{item.price}</span>
                                  <Button 
                                    size="sm"
                                    onClick={() => handleAddToCart(item.id)}
                                    className="bg-hunter-orange-600 hover:bg-hunter-orange-700"
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-hunter-orange-600 hover:bg-hunter-orange-700 px-8 py-3 text-lg font-semibold">
                    Add All Essential Items to Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}