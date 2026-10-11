# She Built Her Own 🌻

A premium cinematic storytelling website celebrating an extraordinary journey from IIPS to IIM.

## ✨ Features

- **Cinematic Design**: Netflix documentary meets Apple product launch aesthetics
- **Smooth Animations**: GSAP scroll triggers + Framer Motion
- **Golden Particle Effects**: Animated background particles
- **Glassmorphism UI**: Premium glass effects throughout
- **Mobile Responsive**: Mobile-first design approach
- **SEO Optimized**: Complete meta tags and semantic HTML
- **Dark + Gold Theme**: Elegant color palette

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding Your Images

Replace the placeholder content in each section with your actual images:

### Image Locations by Section:

1. **Hero Section** - Animated particles (no image needed)

2. **The Girl Who Dared** (`TheGirlWhoDared.tsx`)
   - Top 100 India Medal photo
   - Location: Line 24-35

3. **Saying Yes** (`SayingYes.tsx`)
   - Stage Event photo
   - Location: Line 44-55

4. **Moments Nobody Saw** (`MomentsNobodySaw.tsx`)
   - Cultural Event photo
   - Location: Line 53-64

5. **Grace Under Pressure** (`GraceUnderPressure.tsx`)
   - Doorway Portrait photo
   - Location: Line 78-89

6. **Building Platform** (`BuildingPlatform.tsx`)
   - Behind the scenes podcast photo (Line 33-44)
   - Interview photo (Line 58-69)

7. **Milestones** (`Milestones.tsx`)
   - IIT Delhi image
   - Location: Line 62-73

8. **The IIM Moment** (`TheIIMMoment.tsx`)
   - Portrait photo
   - Location: Line 58-69

9. **Final Section** (`FinalSection.tsx`)
   - Medal photo (return to beginning)
   - Location: Line 23-34

### How to Add Images:

#### Option 1: Create public folder and use Next.js Image component
```bash
# Create public folder
mkdir public
mkdir public/images

# Copy your WhatsApp images to public/images/
# Then update the placeholder divs with:
```

```tsx
<Image
  src="/images/your-image-name.jpg"
  alt="Description"
  fill
  className="object-cover"
  priority
/>
```

#### Option 2: Direct background images with CSS
Update the placeholder divs with:
```tsx
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/your-image.jpg)' }}
/>
```

## 🎨 Color Scheme

- Deep Black: `#0A0A0A`
- Warm Gold: `#D4AF37`
- Soft Ivory: `#F5F2E8`
- Amber Highlight: `#FFB347`

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Fonts**: Playfair Display, Inter, Cormorant Garamond

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
└── components/
    ├── ParticleBackground.tsx
    ├── LoadingScreen.tsx
    ├── HeroSection.tsx
    ├── TheGirlWhoDared.tsx
    ├── SayingYes.tsx
    ├── MomentsNobodySaw.tsx
    ├── GraceUnderPressure.tsx
    ├── BuildingPlatform.tsx
    ├── Milestones.tsx
    ├── TheIIMMoment.tsx
    └── FinalSection.tsx
```

## 🚢 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily to Vercel (recommended for Next.js):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use other platforms:
- **Netlify**: Drag & drop the `.next` folder
- **AWS Amplify**: Connect your Git repository
- **Railway/Render**: One-click deployment

## 🎯 Performance Optimizations

- Lazy loaded images
- Code splitting by component
- Optimized fonts with display swap
- Minimal external dependencies
- CSS-in-JS with Tailwind for tree-shaking

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 💡 Customization Tips

1. **Adjust Animation Speed**: Modify `duration` values in motion components
2. **Change Colors**: Update Tailwind config color values
3. **Add More Sections**: Create new components following existing patterns
4. **Background Music**: Add audio player in `MomentsNobodySaw.tsx` button

## 📝 License

This is a personal tribute website. All rights reserved.

---

**Built with ❤️ and admiration**

🌻 Proud of You
