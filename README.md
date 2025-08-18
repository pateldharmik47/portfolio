# Developer Portfolio (React + Vite + Tailwind)

## Quick Start
```bash
npm install
npm run dev
```

## Configure Email (optional)
Create a `.env` in the project root with:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
Then set the same in your deployment provider (Vercel/Netlify) as environment variables.

## Build
```bash
npm run build
npm run preview
```

## Notes
- System theme is respected, with a manual toggle in the header.
- All content is mapped from `src/constants/data.js` so you can edit skills, projects, links, etc.
- Fully responsive using Tailwind’s utility classes.
