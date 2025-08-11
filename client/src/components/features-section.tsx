import { Brain, TrendingUp, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Our advanced AI continuously analyzes thousands of products, reviews, and price points to surface the best recommendations for your specific needs."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Price Tracking",
      description: "Never overpay again. We monitor prices across hundreds of retailers and alert you to the best deals and price drops on your favorite gear."
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with experienced hunters and outdoor enthusiasts. Share experiences, get advice, and discover hidden gems from the community."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Why Choose Hunthive?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI technology meets outdoor expertise to deliver unmatched gear recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-hunter-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-2xl text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
