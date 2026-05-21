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
  
  content = content.replace(/hover:bg-white\//g, 'hover:bg-black/');
  content = content.replace(/hover:text-white/g, 'hover:text-black');
  content = content.replace(/bg-white/g, 'bg-black');
  // the buttons the previous script touched now have `hover:bg-black/90` and `bg-black`, but what if they still have `bg-white` somewhere that wasn't covered?
  // I covered bg-white/5, 10, etc. Let's do `bg-white` manually for those that got missed if any.
  
  fs.writeFileSync(file, content, 'utf8');
});
