import { Menu, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-forest-800 border-b border-forest-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-hunter-orange-600 flex items-center">
                <Target className="mr-2" size={24} />
                Hunthive
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-forest-200 hover:text-hunter-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gear Reviews
              </a>
              <a href="#" className="text-forest-200 hover:text-hunter-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Price Comparison
              </a>
              <a href="#" className="text-forest-200 hover:text-hunter-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Hunt Planning
              </a>
              <Button className="bg-hunter-orange-600 hover:bg-hunter-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign Up
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-forest-200 hover:text-white p-2">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
