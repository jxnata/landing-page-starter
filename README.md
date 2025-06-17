# Sales Landing Page Starter

A modern, high-converting landing page starter built with React, TypeScript, Vite, and Tailwind CSS. Perfect for creating sales-focused landing pages with optimized conversion rates.

## 🚀 Features

-   **Modern Tech Stack**: React 19, TypeScript, Vite for blazing-fast development
-   **Tailwind CSS v4**: Latest version with modern styling capabilities
-   **Pre-built Sections**: Ready-to-use components for high-converting landing pages
    -   Hero section with compelling headlines
    -   Features showcase
    -   About section for building trust
    -   Pricing tables for clear value proposition
    -   Footer with essential links
-   **Responsive Design**: Mobile-first approach for all devices
-   **Type Safety**: Full TypeScript support for better development experience
-   **Fast Performance**: Optimized build with Vite
-   **Sales-Focused**: Components designed with conversion optimization in mind

## 🏗️ Project Structure

```
src/
├── components/
│   ├── button.tsx          # Reusable button component
│   └── sections/
│       ├── hero.tsx        # Hero section
│       ├── features.tsx    # Features showcase
│       ├── about.tsx       # About/trust section
│       ├── pricing.tsx     # Pricing tables
│       └── footer.tsx      # Footer section
├── pages/
│   └── home.tsx           # Main landing page
├── assets/                # Images and static assets
├── index.css             # Global styles
└── main.tsx              # App entry point
```

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm, yarn, or pnpm

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url>
cd landing-page-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Styling

This project uses Tailwind CSS v4. Customize your design by:

-   Editing the global styles in `src/index.css`
-   Modifying component classes directly
-   Extending Tailwind configuration if needed

### Content

1. **Hero Section**: Edit `src/components/sections/hero.tsx` to customize your main headline, subheadline, and call-to-action
2. **Features**: Modify `src/components/sections/features.tsx` to showcase your product/service benefits
3. **Pricing**: Update `src/components/sections/pricing.tsx` with your pricing plans
4. **About**: Customize `src/components/sections/about.tsx` to build trust and credibility

### Components

-   Reusable components are in `src/components/`
-   Each section is modular and can be easily modified or replaced
-   Add new sections by creating components in `src/components/sections/`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## 🔍 Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🧹 Linting

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 💡 Best Practices for Sales Landing Pages

This starter is built with conversion optimization in mind:

1. **Clear Value Proposition**: Use the hero section to immediately communicate your unique value
2. **Social Proof**: Add testimonials and trust indicators in the about section
3. **Benefit-Focused Features**: Highlight benefits, not just features
4. **Strong CTAs**: Use action-oriented language in buttons and calls-to-action
5. **Pricing Clarity**: Make pricing clear and highlight the best value option
6. **Mobile-First**: Ensure excellent mobile experience as most traffic is mobile

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

-   [React Documentation](https://react.dev/)
-   [TypeScript Documentation](https://www.typescriptlang.org/)
-   [Vite Documentation](https://vite.dev/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/)
-   [Landing Page Conversion Tips](https://unbounce.com/landing-page-articles/)

---

Built with ❤️ for high-converting sales pages
