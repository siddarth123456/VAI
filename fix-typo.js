const fs = require('fs');
const path = require('path');

const dir = 'app/about/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  // Upgrade paragraph line-heights
  ['leading-relaxed', 'leading-[1.8]'],
  
  // Increase paragraph texts
  ['text-[15px] sm:text-base', 'text-[15px] sm:text-[17px]'],
  ['text-[14px] sm:text-[15px]', 'text-[15px] sm:text-base'],
  ['text-sm sm:text-base', 'text-[15px] sm:text-[17px]'],
  ['text-sm md:text-base', 'text-[15px] md:text-[17px]'],
  ['text-[13px] text-white/40', 'text-[14px] text-white/40'],
  ['text-[14px] text-white/50', 'text-[15px] text-white/50'],
  
  // Better default for base mono sizing
  ['font-mono text-[15px]', 'font-mono text-[16px]'],
  ['font-mono text-[14px]', 'font-mono text-[15px]'],
  ['font-mono text-[13px]', 'font-mono text-[14px]'],
  ['text-[14px] text-white/50', 'text-[15px] text-white/50'],

  // Enhance headings
  ['leading-[1.1]', 'leading-[1.15]'],
  ['leading-[1.05]', 'leading-[1.1]'],
  ['leading-[1.25]', 'leading-[1.3]'],
  
  // Space out paragraphs more
  ['space-y-8', 'space-y-10'],
  ['space-y-6', 'space-y-8'],
  ['mb-6', 'mb-8'],
  ['mb-8', 'mb-10'],
  ['mb-10', 'mb-12'],
];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
