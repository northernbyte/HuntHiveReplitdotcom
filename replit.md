# Hunthive

## Overview

Hunthive is a modern outdoor and hunting gear recommendation platform built as a full-stack React application. The platform combines AI-powered product discovery and recommendations with price comparison features to help outdoor enthusiasts find the perfect gear for their adventures. The application uses a dark, outdoorsy theme with forest greens, blacks, and orange highlights, creating a rugged and professional appearance.

The platform is architected as a static single-page application with placeholder components for future AI integration, including conversational recommendations, product reviews, and automated price tracking. The system is designed to scale into a comprehensive gear discovery platform with backend AI agents, automated product analysis, and affiliate program management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture:**
- Built with React 18 and TypeScript for type safety and modern development patterns
- Uses Vite as the build tool for fast development and optimized production builds
- Implements Wouter for lightweight client-side routing
- Styled with Tailwind CSS and shadcn/ui components for consistent, modern UI
- Features responsive design with mobile-first approach using custom breakpoints
- Organized with clear separation of concerns: components, pages, hooks, and utilities

**Component Structure:**
- Modular component architecture with reusable UI components
- Feature-specific components for AI chat, gear recommendations, and price comparison
- Shared UI component library based on Radix UI primitives
- Custom hooks for mobile detection and toast notifications
- Type-safe component props using TypeScript interfaces

**Backend Architecture:**
- Express.js server with TypeScript for API endpoints
- Placeholder API routes structured for future AI integration
- Memory-based storage with interface for future database migration
- Middleware for logging, error handling, and request processing
- Development-optimized Vite integration with hot module replacement

**State Management:**
- React Query (TanStack Query) for server state management and caching
- Local component state for UI interactions
- Custom hooks for shared logic and state management
- Context providers for global UI state (toasts, tooltips)

**Data Architecture:**
- Drizzle ORM configured for PostgreSQL database operations
- Comprehensive schema design for products, reviews, affiliate links, and user data
- Database models support AI-generated content, price tracking, and user interactions
- Migration system ready for database schema evolution
- Prepared for integration with Neon Database or similar PostgreSQL services

**Development & Deployment:**
- Configured for Vercel deployment with serverless functions
- Environment-based configuration for development and production
- Cron job placeholders for automated AI tasks
- Build optimization for both client and server bundles
- Development tools integration including error overlays and debugging

**Future AI Integration Points:**
- Placeholder API endpoints for conversational AI recommendations
- Schema support for AI-generated product reviews and analysis
- Cron job configuration for automated product discovery and price updates
- Database structure ready for AI agent workflows and affiliate program management
- Component architecture designed to integrate live AI responses

## External Dependencies

**Core Framework & Build Tools:**
- React 18 with TypeScript for the frontend application
- Vite for development server and build optimization
- Express.js for the backend API server
- Wouter for lightweight client-side routing

**UI & Styling:**
- Tailwind CSS for utility-first styling with custom theme configuration
- shadcn/ui component library based on Radix UI primitives
- Custom fonts including Montserrat and Inter from Google Fonts
- Lucide React for consistent iconography
- React Icons for additional icon support

**Data & State Management:**
- TanStack React Query for server state management and caching
- Drizzle ORM for type-safe database operations
- Drizzle Kit for database migrations and schema management
- React Hook Form with Zod resolvers for form validation

**Database & Storage:**
- PostgreSQL database (configured for Neon Database)
- Drizzle Zod for schema validation and type generation
- Session management with connect-pg-simple

**Development & Deployment:**
- Vercel for hosting and serverless function deployment
- ESBuild for server-side code bundling
- TSX for TypeScript execution in development
- Replit integration tools for development environment

**Future Integration Placeholders:**
- AI service integration endpoints (OpenAI, Anthropic, or similar)
- Web scraping tools for product discovery
- Affiliate network APIs for program management
- Email service integration for notifications
- Image processing services for product photos