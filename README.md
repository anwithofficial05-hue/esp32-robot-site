# EMOTI-BOT — ESP32 Robot With Emotions · Landing Page

A futuristic, premium e-commerce landing page for the EMOTI-BOT ESP32 robot. Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

---

## 📁 File & Folder Tree

```
esp32-robot/
├── app/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ParticleBackground.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ViewerSection.tsx        ← 3D viewer lives here
│   │   ├── FeaturesSection.tsx
│   │   ├── EmotionsSection.tsx
│   │   ├── ProductSection.tsx
│   │   └── StorySection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   │   ├── robot-red.png
│   │   ├── robot-white.png
│   │   └── robot-dark.png
│   └── models/               ← PUT YOUR .glb HERE
│       └── robot.glb         (not included — see below)
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 How to Run Locally

### 1. Install dependencies

```bash
cd esp32-robot
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🤖 How to Replace the Placeholder 3D Model with Your GLB

### Step 1 — Export your 3D model

Export your robot as a `.glb` or `.gltf` file from Blender, Fusion 360, or any 3D software.
Recommended: use **glTF Binary (.glb)** for a single-file format.

### Step 2 — Place the file

```
/public/models/robot.glb
```

### Step 3 — Edit `app/sections/ViewerSection.tsx`

Find the `GLBModel` function that's commented out (~line 50–65):

```tsx
// function GLBModel({ color }: { color: string }) {
//   const { scene } = useGLTF("/models/robot.glb");
//   useEffect(() => {
//     scene.traverse((child: any) => {
//       if (child.isMesh && color === "red") {
//         child.material.color.set("#c0392b");
//       } else if (child.isMesh && color === "white") {
//         child.material.color.set("#e8e8e8");
//       }
//     });
//   }, [color, scene]);
//   return <primitive object={scene} scale={1.5} />;
// }
```

**Uncomment** that entire block. Then in the Canvas JSX, replace:

```tsx
<PlaceholderRobot color={color} />
```

with:

```tsx
<GLBModel color={color} />
```

Also add `useEffect` to the imports at the top of the file:
```tsx
import { useRef, useState, Suspense, useEffect } from "react";
```

### Step 4 — Adjust scale & position

Tweak the `scale={1.5}` prop on `<primitive>` to fit your model. You can also add `position={[0, -0.5, 0]}` to reposition it.

### Tip: Preload the model

Add this outside the component to avoid loading flicker:

```tsx
useGLTF.preload("/models/robot.glb");
```

---

## 🌐 How to Deploy on Vercel

### Option A — CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Done — your site is live.

### Option B — GitHub + Vercel Dashboard

1. Push your project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Framework: **Next.js** (auto-detected)
5. Hit **Deploy**

That's it. Vercel handles builds, CDN, and SSL automatically.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Orbitron (headings) |
| Body font | Poppins |
| Background | `#020818` (deep navy-black) |
| Accent cyan | `#00f5ff` |
| Accent blue | `#0066ff` |
| Accent purple | `#7c3aed` |
| Glass bg | `rgba(10,20,60,0.5)` + backdrop-blur |

---

## ✏️ Customization Cheatsheet

| What | Where |
|------|-------|
| Price | `ProductSection.tsx` → `$89` |
| Robot images | `/public/images/` |
| 3D model | `/public/models/robot.glb` + `ViewerSection.tsx` |
| Color variants | `ViewerSection.tsx` → `COLOR_OPTIONS` array |
| Emotions | `EmotionsSection.tsx` → `emotions` array |
| Features | `FeaturesSection.tsx` → `features` array |
| Specs table | `ProductSection.tsx` → `specs` array |
| Brand name | Search/replace `EMOTI-BOT` across files |
| Meta tags | `app/layout.tsx` → `metadata` object |
