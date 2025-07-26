# White Orchid Spa Website

## Overview

This is a full-stack React application for White Orchid Spa, a luxury spa website featuring service listings, booking functionality, and an elegant user interface. The application is built with a modern TypeScript stack using React, Express.js, and PostgreSQL with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, sharing common types and schemas through a `shared` directory. It uses a traditional Express.js backend API with a React frontend, connected through RESTful endpoints.

### Architecture Decisions:
- **Monorepo structure**: Enables code sharing between frontend and backend while maintaining clear separation
- **TypeScript throughout**: Provides type safety across the entire stack
- **Shared schema definition**: Uses Drizzle ORM with Zod validation for consistent data types
- **Component-based frontend**: Leverages shadcn/ui for consistent, accessible UI components

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom spa-themed color palette
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
The application uses two main entities:
- **Users**: For potential admin functionality (username/password authentication)
- **Bookings**: Customer booking submissions with contact information and service selection

### Key Features
- **Responsive Design**: Mobile-first approach with elegant spa theming
- **Service Showcase**: Dynamic service grid with pricing and descriptions
- **Booking System**: Contact form with service selection and validation
- **Smooth Navigation**: Scroll-to-section navigation with fixed header
- **Professional Branding**: Spa-specific color scheme and typography

## Data Flow

1. **User Interaction**: Users browse services and submit booking requests through forms
2. **Form Validation**: Client-side validation using React Hook Form and Zod schemas
3. **API Communication**: TanStack Query manages API calls to Express endpoints
4. **Data Persistence**: Booking data is stored in PostgreSQL via Drizzle ORM
5. **Feedback**: Toast notifications provide user feedback on successful submissions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with Radix UI primitives for accessibility
- **Icons**: Lucide React icons with React Icons for social media
- **Fonts**: Google Fonts (Playfair Display, Open Sans) for elegant typography
- **Carousel**: Embla Carousel for potential image galleries

### Backend Dependencies
- **Database Driver**: Neon Database serverless driver for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development Tools**: ESBuild for production builds, TSX for development

### Development Tools
- **Build System**: Vite for fast development and optimized builds
- **Code Quality**: TypeScript for type checking
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles the Express server to `dist/index.js`
- **Database**: Drizzle migrations in the `migrations` directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Uses Vite dev server with HMR and Express API proxy
- **Production**: Serves static files through Express with API routes

### Development vs Production
- **Development**: Vite middleware integration with Express for hot reloading
- **Production**: Static file serving with optimized builds
- **Error Handling**: Replit-specific error overlay in development mode

The application is designed to be easily deployable on platforms like Replit, with automatic database provisioning and environment variable management.