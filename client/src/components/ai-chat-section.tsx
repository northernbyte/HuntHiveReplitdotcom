import { useState } from "react";
import { Bot, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function AiChatSection() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log(`Sending message: ${message}`);
    // TODO: Implement AI chat functionality
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            AI-Powered Recommendations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intelligent system analyzes thousands of products to find the perfect gear for your needs.
          </p>
        </div>

        {/* AI Chat Interface */}
        <Card className="max-w-4xl mx-auto bg-forest-800 rounded-2xl border border-forest-700 overflow-hidden">
          <div className="bg-forest-900 px-6 py-4 border-b border-forest-700">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <span className="text-forest-200 text-sm font-medium">Hunthive AI Assistant</span>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-hunter-orange-600 text-white px-6 py-3 rounded-2xl rounded-br-md max-w-xs">
                <p>I'm planning a deer hunt in Montana this fall. What rifle should I consider?</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="text-hunter-orange-500" size={16} />
              </div>
              <div className="bg-gray-700 text-white px-6 py-4 rounded-2xl rounded-bl-md max-w-2xl">
                <p className="mb-4">Based on Montana deer hunting regulations and terrain, I'd recommend these rifles:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-hunter-orange-400">
                    <Star className="mr-2" size={16} />
                    <span>Remington Model 700 (.308 Win) - $649</span>
                  </div>
                  <div className="flex items-center text-hunter-orange-400">
                    <Star className="mr-2" size={16} />
                    <span>Winchester Model 70 (.270 WSM) - $899</span>
                  </div>
                  <div className="flex items-center text-hunter-orange-400">
                    <Star className="mr-2" size={16} />
                    <span>Tikka T3x Hunter (.30-06) - $729</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                <Bot className="text-hunter-orange-500" size={16} />
              </div>
              <div className="bg-gray-700 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="flex items-center space-x-3">
              <Input 
                type="text" 
                placeholder="Ask about gear, compare prices, or get hunting advice..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 
                           focus:outline-none focus:border-hunter-orange-500 focus:ring-1 focus:ring-hunter-orange-500"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-hunter-orange-600 hover:bg-hunter-orange-700 text-white px-6 py-3 rounded-xl 
                           transition-colors flex items-center space-x-2"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
