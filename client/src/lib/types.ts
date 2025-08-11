// Gear and Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  brand: string;
  imageUrl: string;
  features: string[];
  inStock: boolean;
  affiliateLinks: AffiliateLink[];
  reviews: ProductReview[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AffiliateLink {
  id: string;
  productId: string;
  retailer: string;
  url: string;
  price: number;
  shipping: string;
  isActive: boolean;
  lastChecked: Date;
}

export interface ProductReview {
  id: string;
  productId: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  isAiGenerated: boolean;
  authorName?: string;
  createdAt: Date;
}

// Hunt Planning Types
export interface HuntPlan {
  id: string;
  userId: string;
  title: string;
  location: string;
  gameType: string;
  season: string;
  duration: number; // days
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  recommendedGear: string[]; // Product IDs
  budget: number;
  createdAt: Date;
}

// AI Chat Types
export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  productRecommendations?: Product[];
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  userId?: string;
  messages: ChatMessage[];
  context: ChatContext;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatContext {
  userPreferences: {
    experienceLevel: 'beginner' | 'intermediate' | 'expert';
    huntingStyles: string[];
    budget: number;
    location: string;
  };
  currentIntent: 'search' | 'hunt-planning' | 'guided-start' | 'general';
}

// User and Preferences Types
export interface UserPreferences {
  id: string;
  userId: string;
  favoriteCategories: string[];
  priceAlerts: PriceAlert[];
  huntingExperience: 'beginner' | 'intermediate' | 'expert';
  preferredBrands: string[];
  budgetRange: {
    min: number;
    max: number;
  };
}

export interface PriceAlert {
  id: string;
  productId: string;
  targetPrice: number;
  isActive: boolean;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Search and Filter Types
export interface SearchFilters {
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  inStock?: boolean;
  sortBy?: 'price' | 'rating' | 'popularity' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResult {
  products: Product[];
  filters: {
    categories: { name: string; count: number }[];
    brands: { name: string; count: number }[];
    priceRange: { min: number; max: number };
  };
  total: number;
}
