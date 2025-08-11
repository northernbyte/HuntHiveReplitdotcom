import { Target } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-forest-900 border-t border-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-display font-bold text-hunter-orange-600 mb-4 flex items-center">
              <Target className="mr-2" size={24} />
              Hunthive
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI-powered gear recommendations for the modern outdoor enthusiast. Find the perfect equipment for your next adventure.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Gear Reviews</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Price Comparison</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Hunt Planning</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">AI Assistant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-hunter-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hunter-orange-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hunter-orange-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hunter-orange-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hunter-orange-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hunthive. All rights reserved. | 
             <a href="#" className="hover:text-hunter-orange-500 transition-colors ml-1">Privacy Policy</a> | 
             <a href="#" className="hover:text-hunter-orange-500 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
