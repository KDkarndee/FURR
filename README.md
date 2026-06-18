# FURR Interior Design - Frontend Only

This is the frontend-only version of the FURR Interior Design & Home Decor Showcase website.

## Project Structure

```
client/
  ├── public/              # Static assets (favicon, robots.txt)
  ├── src/
  │   ├── components/      # Reusable UI components
  │   ├── pages/           # Page components
  │   ├── contexts/        # React contexts
  │   ├── App.tsx          # Main app component
  │   ├── main.tsx         # Entry point
  │   └── index.css        # Global styles
  └── index.html           # HTML template
```

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for interactive elements
- **Modern UI** - Minimalist luxury design with Playfair Display + Poppins fonts
- **Multi-page Navigation** - Home, Studio (About), Works (Portfolio), Contact

## Pages

1. **Home** - Hero section, featured projects, about section, CTA
2. **Studio** - Company values, services, design process
3. **Works** - Portfolio gallery with category filtering
4. **Contact** - Contact form and business information

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Wouter** - Routing

## Color Scheme

- **Primary**: Coral/Terracotta (#D85E4A)
- **Background**: Off-white/Cream (#FAFAF8)
- **Text**: Charcoal (#1A1A1A)

## Fonts

- **Headings**: Playfair Display (Google Fonts)
- **Body**: Poppins (Google Fonts)

## Customization

### Update Company Information

Edit `client/src/components/Header.tsx` and `client/src/components/Footer.tsx` to update:
- Company name and logo
- Navigation links
- Contact information
- Social media links

### Update Project Images

Replace image URLs in:
- `client/src/pages/Home.tsx` - Featured projects
- `client/src/pages/Works.tsx` - Portfolio gallery
- `client/src/pages/Studio.tsx` - About section

### Update Content

Edit individual page files in `client/src/pages/`:
- `Home.tsx` - Homepage content
- `Studio.tsx` - About page content
- `Works.tsx` - Portfolio content
- `Contact.tsx` - Contact form and info

## Development Notes

- All images are hosted externally (CDN URLs) - no local image storage
- Animations use Framer Motion with GPU-optimized transforms
- Responsive breakpoints: mobile (default), md (768px), lg (1024px)
- Form submission is currently a demo (shows success message)

## Production Deployment

1. Build the project: `pnpm build`
2. Deploy the `dist/` folder to your hosting service
3. Configure your domain and SSL certificate

## License

MIT
