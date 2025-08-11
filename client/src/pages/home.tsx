import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AiChatSection from "@/components/ai-chat-section";
import GearRecommendations from "@/components/gear-recommendations";
import PriceComparison from "@/components/price-comparison";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <AiChatSection />
      <GearRecommendations />
      <PriceComparison />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
