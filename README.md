 Templating Engine
**Nunjucks** - A powerful templating language for JavaScript with inheritance, asynchronous control, and more.
 Bundler / Task Runner
**Vite** - A modern, fast build tool that provides instant server start and lightning-fast HMR (Hot Module Replacement).

 Installation Steps
1. *Install dependencies:*
   npm install

2. *Run development server:*
   npm run dev
   The development server will start at `http://localhost:5173`

3. *Build for production:*
   npm run build
   The compiled output will be generated in the `dist/` directory.

4. *Preview production build:*
   npm run preview

# Nunjucks Templating
- *Main template*: `index.html` - The entry point that includes all Nunjucks partials
- *Partials*: Reusable components in `src/templates/partials/` directory
  - `head.njk` - HTML head with meta tags and stylesheets
  - `navbar.njk` - Navigation bar with dynamic menu items
  - `hero.njk` - Hero section with title and subtitle
  - `features.njk` - Feature cards grid
  - `about.njk` - About section with content and image
  - `services.njk` - Services cards display
  - `contact.njk` - Contact form
  - `footer.njk` - Footer with scripts
- *Data*: All content is stored in `src/data.json` and injected into templates
- *Template syntax*: Uses `{{ variable }}` for output and `{% %}` for logic and loops

# Vite Configuration
- Configured in `vite.config.js`
- Uses `vite-plugin-nunjucks` to process `.njk` files embedded in HTML
- Automatically reads data from `src/data.json` and injects it into templates
- Variables are scoped per entry point (e.g., `index.html`)
- Builds optimized production assets with code splitting and minification


This project helped me understand how to use Nunjucks for modular template design and Vite for efficient bundling and build automation. It strengthened my knowledge of modern frontend workflows, project structure organization, and deployment-ready build processes
