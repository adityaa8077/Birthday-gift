# 🚀 Setup Instructions

## Your Website is Ready! Here's How to Get Started

---

## Step 1: Install Dependencies

Open your terminal in this folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Framer Motion, GSAP, etc.)

---

## Step 2: Add Your WhatsApp Images

### Create the images folder:

```bash
mkdir public
mkdir public/images
```

### Copy your WhatsApp images into `public/images/`

You need these images for the following sections:

1. **medal-top100** - Your Top 100 India medal photo
2. **stage-event** - Speaking/performing on stage
3. **cultural-event** - Cultural event performance
4. **doorway-portrait** - Elegant portrait photo
5. **podcast-behind** - Podcast behind the scenes
6. **podcast-interview** - Podcast interview moment
7. **iit-delhi** - IIT Delhi campus or event
8. **portrait-final** - Portrait for the IIM moment

**Don't worry about exact names!** You can use any names you want. Just remember them for the next step.

---

## Step 3: Run the Website

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You'll see the website with placeholders showing where each image should go!

---

## Step 4: Replace Placeholder Images

Once you see which image goes where, I can help you integrate them. There are two easy ways:

### Option A: Tell me your image names
Just tell me what your image files are called (e.g., "WhatsApp Image 2024-01-15.jpg") and I'll update the code for you!

### Option B: Follow the guide
Check `IMAGE-INTEGRATION-GUIDE.md` for detailed instructions on updating each component.

---

## 🎨 Customization Tips

### Change text content:
- Edit each component in `src/components/`
- Update quotes, descriptions, and messages

### Adjust colors:
- Edit `tailwind.config.ts` 
- Modify the color values in `globals.css`

### Modify animations:
- Change `duration` values in Framer Motion components
- Adjust timing delays for text reveals

---

## 📱 Mobile Preview

The website is fully responsive! Test it by:
1. Opening in your browser
2. Press F12 (Developer Tools)
3. Click the mobile device icon
4. View different screen sizes

---

## 🚢 When You're Ready to Publish

### Option 1: Vercel (Recommended - It's Free!)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
1. Build the site: `npm run build`
2. Drag the `.next` folder to Netlify

### Option 3: Any hosting
```bash
npm run build
npm start
```

---

## ✨ What's Included

✅ Cinematic animations and transitions
✅ Golden particle background effects
✅ Smooth scroll behavior
✅ Mobile-responsive design
✅ Loading screen with animation
✅ Glassmorphism UI effects
✅ SEO optimization
✅ All 9 sections ready to go

---

## 🆘 Need Help?

Common issues:

### "npm: command not found"
→ Install Node.js from nodejs.org

### "Images not showing"
→ Make sure images are in `public/images/` folder
→ Check file names match exactly (including .jpg or .png)

### "Site looks different on mobile"
→ This is normal! The design adapts to screen size
→ Some text sizes and layouts change for better mobile experience

### Want to change something?
→ Just ask! I can help you customize any section

---

## 🎬 Next Steps

1. **Run `npm install`**
2. **Copy your images to `public/images/`**
3. **Run `npm run dev`**
4. **Open http://localhost:3000**
5. **Tell me which images you want where!**

I'll help you integrate everything perfectly! 🌻
