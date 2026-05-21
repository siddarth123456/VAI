import fs from 'fs';

const files = [
  './components/dashboard-preview.tsx',
  './components/features.tsx',
  './components/footer.tsx',
  './components/hero.tsx',
  './components/navbar.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace text-white variations
  content = content.replace(/text-white\/80/g, 'text-black/80');
  content = content.replace(/text-white\/60/g, 'text-black/60');
  content = content.replace(/text-white\/50/g, 'text-black/50');
  content = content.replace(/text-white\/40/g, 'text-black/40');
  content = content.replace(/text-white/g, 'text-black');
  
  // Replace bg-white variations
  content = content.replace(/bg-white\/5/g, 'bg-black/5');
  content = content.replace(/bg-white\/10/g, 'bg-black/10');
  content = content.replace(/bg-white\/15/g, 'bg-black/15');
  content = content.replace(/bg-white\/20/g, 'bg-black/20');
  content = content.replace(/bg-white\/\[0\.02\]/g, 'bg-black/[0.02]');
  
  // Replace border-white variations
  content = content.replace(/border-white\/10/g, 'border-black/10');
  content = content.replace(/border-white\/20/g, 'border-black/20');
  content = content.replace(/border-white\/5/g, 'border-black/5');
  
  // Fix SVGs
  content = content.replace(/stroke="#FFFFFF"/g, 'stroke="#000000"');
  content = content.replace(/fill="#FFFFFF"/g, 'fill="#000000"');
  
  // Custom tweaks
  content = content.replace(/bg-white text-bg-dark/g, 'bg-black text-white');
  
  fs.writeFileSync(file, content, 'utf8');
});
