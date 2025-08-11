import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle, MapPin, DollarSign, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ size: number; className?: string }>;
}

interface Question {
  id: string;
  title: string;
  description: string;
  type: 'single' | 'multiple' | 'slider' | 'select';
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

interface UserProfile {
  experienceLevel: string;
  huntingStyles: string[];
  budget: number;
  location: string;
  primaryGame: string;
  seasonPreference: string;
  timeCommitment: string;
}

export default function GuidedStartPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions: Question[] = [
    {
      id: 'experienceLevel',
      title: 'What\'s your hunting experience level?',
      description: 'This helps us recommend appropriate gear complexity and price points.',
      type: 'single',
      options: [
        {
          id: 'beginner',
          label: 'Complete Beginner',
          description: 'Never been hunting, need to learn everything from scratch'
        },
        {
          id: 'novice',
          label: 'Novice',
          description: 'Been hunting a few times, have basic knowledge'
        },
        {
          id: 'intermediate',
          label: 'Intermediate',
          description: 'Hunt regularly, comfortable with most gear and techniques'
        },
        {
          id: 'advanced',
          label: 'Advanced',
          description: 'Very experienced, looking for specialized or premium gear'
        }
      ]
    },
    {
      id: 'huntingStyles',
      title: 'What types of hunting interest you?',
      description: 'Select all that apply. We\'ll tailor recommendations to your preferred hunting styles.',
      type: 'multiple',
      options: [
        { id: 'big-game', label: 'Big Game Hunting', description: 'Deer, elk, moose, bear' },
        { id: 'waterfowl', label: 'Waterfowl Hunting', description: 'Ducks, geese, and other water birds' },
        { id: 'upland', label: 'Upland Game', description: 'Pheasant, quail, grouse, turkey' },
        { id: 'archery', label: 'Bow Hunting', description: 'Traditional and compound bow hunting' },
        { id: 'predator', label: 'Predator Hunting', description: 'Coyotes, wolves, and other predators' },
        { id: 'small-game', label: 'Small Game', description: 'Rabbits, squirrels, and similar' }
      ]
    },
    {
      id: 'budget',
      title: 'What\'s your gear budget?',
      description: 'This helps us show you options within your price range. You can always adjust later.',
      type: 'slider',
      min: 500,
      max: 10000,
      step: 250,
      unit: '$'
    },
    {
      id: 'location',
      title: 'Where do you primarily hunt?',
      description: 'Location affects gear recommendations for terrain, weather, and regulations.',
      type: 'select',
      options: [
        { id: 'northeast', label: 'Northeast US' },
        { id: 'southeast', label: 'Southeast US' },
        { id: 'midwest', label: 'Midwest US' },
        { id: 'southwest', label: 'Southwest US' },
        { id: 'northwest', label: 'Northwest US' },
        { id: 'rocky-mountains', label: 'Rocky Mountains' },
        { id: 'great-plains', label: 'Great Plains' },
        { id: 'canada', label: 'Canada' },
        { id: 'other', label: 'Other/International' }
      ]
    },
    {
      id: 'primaryGame',
      title: 'What\'s your primary target game?',
      description: 'This determines the core gear recommendations we\'ll focus on.',
      type: 'single',
      options: [
        { id: 'whitetail', label: 'Whitetail Deer', description: 'Most common deer species in North America' },
        { id: 'mule-deer', label: 'Mule Deer', description: 'Western deer species, larger than whitetail' },
        { id: 'elk', label: 'Elk', description: 'Large game requiring more powerful equipment' },
        { id: 'turkey', label: 'Wild Turkey', description: 'Requires specialized calls and camouflage' },
        { id: 'waterfowl', label: 'Waterfowl', description: 'Ducks and geese, needs specific gear' },
        { id: 'bear', label: 'Black Bear', description: 'Requires heavy-duty equipment' },
        { id: 'multiple', label: 'Multiple Species', description: 'I hunt various game animals' }
      ]
    },
    {
      id: 'timeCommitment',
      title: 'How often do you plan to hunt?',
      description: 'This helps us recommend gear durability and investment level.',
      type: 'single',
      options: [
        {
          id: 'casual',
          label: 'Casual (1-5 days/year)',
          description: 'Occasional hunting, budget-friendly gear focus'
        },
        {
          id: 'regular',
          label: 'Regular (6-15 days/year)',
          description: 'Moderate hunting, balance of quality and value'
        },
        {
          id: 'serious',
          label: 'Serious (16-30 days/year)',
          description: 'Frequent hunting, prioritize quality and durability'
        },
        {
          id: 'dedicated',
          label: 'Dedicated (30+ days/year)',
          description: 'Hunting lifestyle, premium gear investment'
        }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
      generateRecommendations();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendations = () => {
    console.log("Generating recommendations based on answers:", answers);
    // TODO: Call AI service to generate personalized recommendations
  };

  const isCurrentStepValid = () => {
    const currentQuestion = questions[currentStep];
    const answer = answers[currentQuestion.id];
    
    if (!answer) return false;
    
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    
    return true;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h1 className="text-4xl font-display font-bold text-white mb-4">
                Profile Complete!
              </h1>
              <p className="text-xl text-gray-300">
                We're analyzing your preferences to create personalized gear recommendations.
              </p>
            </div>

            <Card className="bg-forest-800 rounded-2xl border border-forest-700 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Your Hunting Profile</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Experience Level</h3>
                    <p className="text-forest-200 capitalize">{answers.experienceLevel}</p>
                  </div>
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Hunting Styles</h3>
                    <div className="flex flex-wrap gap-2">
                      {answers.huntingStyles?.map((style: string) => (
                        <Badge key={style} className="bg-gray-600 text-white">
                          {questions[1].options?.find(opt => opt.id === style)?.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Budget Range</h3>
                    <p className="text-forest-200">${answers.budget?.toLocaleString()}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Primary Location</h3>
                    <p className="text-forest-200">
                      {questions[3].options?.find(opt => opt.id === answers.location)?.label}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Primary Game</h3>
                    <p className="text-forest-200">
                      {questions[4].options?.find(opt => opt.id === answers.primaryGame)?.label}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-hunter-orange-500 font-semibold mb-2">Time Commitment</h3>
                    <p className="text-forest-200">
                      {questions[5].options?.find(opt => opt.id === answers.timeCommitment)?.label}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Button 
                className="bg-hunter-orange-600 hover:bg-hunter-orange-700 px-8 py-3 text-lg font-semibold"
                onClick={() => console.log("Navigate to recommendations")}
              >
                View My Recommendations
              </Button>
              <div className="text-gray-400">
                <p>You can always update your preferences later to get new recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Progress Header */}
      <section className="bg-forest-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-display font-bold text-white">
              Getting to Know You
            </h1>
            <span className="text-forest-200">
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-hunter-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-forest-800 rounded-2xl border border-forest-700 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-white mb-4">
                {currentQuestion.title}
              </h2>
              <p className="text-xl text-forest-200">
                {currentQuestion.description}
              </p>
            </div>

            <div className="mb-8">
              {currentQuestion.type === 'single' && (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => (
                    <Card
                      key={option.id}
                      className={`p-6 cursor-pointer transition-all duration-200 ${
                        answers[currentQuestion.id] === option.id
                          ? 'bg-hunter-orange-600/20 border-hunter-orange-500'
                          : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                      }`}
                      onClick={() => handleAnswer(currentQuestion.id, option.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                          answers[currentQuestion.id] === option.id
                            ? 'border-hunter-orange-500 bg-hunter-orange-500'
                            : 'border-gray-400'
                        }`}>
                          {answers[currentQuestion.id] === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {option.label}
                          </h3>
                          {option.description && (
                            <p className="text-gray-300">{option.description}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiple' && (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => (
                    <Card
                      key={option.id}
                      className={`p-6 cursor-pointer transition-all duration-200 ${
                        answers[currentQuestion.id]?.includes(option.id)
                          ? 'bg-hunter-orange-600/20 border-hunter-orange-500'
                          : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                      }`}
                      onClick={() => {
                        const current = answers[currentQuestion.id] || [];
                        const newValue = current.includes(option.id)
                          ? current.filter((id: string) => id !== option.id)
                          : [...current, option.id];
                        handleAnswer(currentQuestion.id, newValue);
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 ${
                          answers[currentQuestion.id]?.includes(option.id)
                            ? 'border-hunter-orange-500 bg-hunter-orange-500'
                            : 'border-gray-400'
                        }`}>
                          {answers[currentQuestion.id]?.includes(option.id) && (
                            <CheckCircle className="text-white" size={16} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {option.label}
                          </h3>
                          {option.description && (
                            <p className="text-gray-300">{option.description}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'slider' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hunter-orange-500 mb-2">
                      {currentQuestion.unit}{answers[currentQuestion.id]?.toLocaleString() || currentQuestion.min?.toLocaleString()}
                    </div>
                    <p className="text-gray-300">Adjust your budget range</p>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={[answers[currentQuestion.id] || currentQuestion.min || 0]}
                      onValueChange={(value) => handleAnswer(currentQuestion.id, value[0])}
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step={currentQuestion.step}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>{currentQuestion.unit}{currentQuestion.min?.toLocaleString()}</span>
                      <span>{currentQuestion.unit}{currentQuestion.max?.toLocaleString()}+</span>
                    </div>
                  </div>
                </div>
              )}

              {currentQuestion.type === 'select' && (
                <Select 
                  value={answers[currentQuestion.id]} 
                  onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                >
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 h-12 text-lg">
                    <SelectValue placeholder="Select your primary location" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentQuestion.options?.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <ChevronLeft size={20} className="mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                className="bg-hunter-orange-600 hover:bg-hunter-orange-700"
              >
                {currentStep === questions.length - 1 ? 'Complete Profile' : 'Next'}
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}