# Soar Task - Financial Dashboard

A modern financial dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Interactive charts and statistics
- 💳 Credit card management
- 📱 Fully responsive design
- 🔄 Quick transfer functionality
- 📈 Transaction history
- ⚙️ User settings and profile management

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Chart.js
- React Router DOM
- Lucide Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   ├── cards/          # Credit card related components
│   ├── charts/         # Chart components using Chart.js
│   ├── settings/       # User settings components
│   ├── transfer/       # Money transfer components
│   └── transactions/   # Transaction related components
├── pages/              # Page components
├── types/              # TypeScript type definitions
├── lib/                # Utility functions and configurations
└── data/              # Mock data for development

```

## Best Practices

- Each component is split into its own file
- Components are organized by feature/domain
- Shared types are centralized in `types/` directory
- Chart configurations are isolated in `lib/chartjs.ts`
- Responsive design implemented using Tailwind breakpoints

## Development Guidelines

1. Follow the existing file structure
2. Keep components small and focused
3. Use TypeScript types for props and data
4. Maintain consistent styling with Tailwind CSS
5. Follow ESLint and Prettier configurations

## Assumptions

- Authentication is not implemented (mock data used)
- Chart data is static for demonstration
- Profile images are loaded from Unsplash
- All monetary values are in USD
