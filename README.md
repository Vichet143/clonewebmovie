# CloneWebMovie

CloneWebMovie is a Vue 3 + Vite single-page application for browsing movie content, with sectioned explore pages, movie detail routing, search support, FAQ, and custom Tailwind UI styling.

## Features

- Vue 3 with Vite development tooling
- Vue Router for SPA navigation
- Pinia state management
- Tailwind CSS + Flowbite + Preline UI styling
- hCaptcha integration support for forms
- Responsive movie explore, search, and detail pages
- 404 fallback route for unknown URLs

## Project Structure

- `src/` - Vue application source
- `src/main.js` - app bootstrap and router/pinia setup
- `src/App.vue` - layout with navbar, footer, and router view
- `src/route.js` - app route definitions
- `src/pages/` - page views and feature sections
- `src/components/` - reusable UI components
- `src/store/` - Pinia stores and API modules
- `public/` - static public assets

## Requirements

- Node.js 18.x
- npm or yarn

## Setup

1. Install dependencies:

   npm install

2. Start the development server:

   npm run dev

3. Build for production:

   npm run build

4. Preview the production build locally:

   npm run preview

## Notes

- The project uses `vanilla-hcaptcha` and registers the custom element `h-captcha`.
- The router includes an explore section with nested routes and a movie detail route: `/movie-detail/:source/:id`.
- The app uses Tailwind CSS via `@tailwindcss/vite` and Flowbite UI components.

## License

This project is provided as-is.
