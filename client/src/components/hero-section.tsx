import { Search, Mountain, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const handleConversationOption = (option: string) => {
    console.log(`Selected option: ${option}`);
    
    switch (option) {
      case 'search':
        setLocation('/search');
        break;
      case 'hunt-planning':
        setLocation('/hunt-planning');
        break;
      case 'guided-start':
        setLocation('/guided-start');
        break;
      default:
        console.log('Unknown option:', option);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Rugged mountain landscape at dawn with hunting terrain" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-white">Find Your Perfect</span>
            <span className="text-hunter-orange-500 block">Hunting Gear</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered recommendations for outdoor enthusiasts. Compare prices, read expert reviews, 
            and discover the gear that matches your adventure.
          </p>

          {/* Conversational Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Option 1: Know what you're looking for */}
            <Card 
              className="group cursor-pointer bg-forest-800/90 backdrop-blur-sm border border-forest-700 rounded-2xl p-8 
                         hover:bg-forest-700/90 hover:border-hunter-orange-500/50 
                         transform hover:scale-105 transition-all duration-300 h-full"
              onClick={() => handleConversationOption('search')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-hunter-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 
                               group-hover:bg-hunter-orange-500 transition-colors">
                  <Search className="text-2xl text-white" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Know what you're looking for?
                </h3>
                <p className="text-forest-200 text-lg leading-relaxed">
                  Search our comprehensive database of outdoor gear with AI-powered filtering and price comparison.
                </p>
              </div>
            </Card>

            {/* Option 2: Going on an epic hunt */}
            <Card 
              className="group cursor-pointer bg-forest-800/90 backdrop-blur-sm border border-forest-700 rounded-2xl p-8 
                         hover:bg-forest-700/90 hover:border-hunter-orange-500/50 
                         transform hover:scale-105 transition-all duration-300 h-full"
              onClick={() => handleConversationOption('hunt-planning')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-hunter-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 
                               group-hover:bg-hunter-orange-500 transition-colors">
                  <Mountain className="text-2xl text-white" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Going on an epic hunt?
                </h3>
                <p className="text-forest-200 text-lg leading-relaxed">
                  Get personalized gear recommendations based on your hunting location, season, and game type.
                </p>
              </div>
            </Card>

            {/* Option 3: Don't have an idea where to start */}
            <Card 
              className="group cursor-pointer bg-forest-800/90 backdrop-blur-sm border border-forest-700 rounded-2xl p-8 
                         hover:bg-forest-700/90 hover:border-hunter-orange-500/50 
                         transform hover:scale-105 transition-all duration-300 h-full"
              onClick={() => handleConversationOption('guided-start')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-hunter-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 
                               group-hover:bg-hunter-orange-500 transition-colors">
                  <Compass className="text-2xl text-white" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Don't have an idea where to start?
                </h3>
                <p className="text-forest-200 text-lg leading-relaxed">
                  Take our guided questionnaire to discover gear recommendations tailored to your experience level.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
