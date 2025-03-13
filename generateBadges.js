import fs from 'fs/promises';
import path from 'path';

// Badge categories and their associated properties
const categories = [
  {
    prefix: 'Trading',
    icons: ['📈', '💹', '💰', '🔄'],
    actions: ['Completed', 'Achieved', 'Mastered', 'Dominated'],
    metrics: ['volume', 'trades', 'profit', 'consistency']
  },
  {
    prefix: 'Social',
    icons: ['🤝', '📱', '🌐', '💬'],
    actions: ['Connected', 'Engaged', 'Influenced', 'Led'],
    metrics: ['followers', 'interactions', 'reach', 'impact']
  },
  {
    prefix: 'Governance',
    icons: ['⚖️', '🏛️', '📜', '🗳️'],
    actions: ['Participated', 'Proposed', 'Voted', 'Championed'],
    metrics: ['proposals', 'votes', 'contributions', 'initiatives']
  },
  {
    prefix: 'Technical',
    icons: ['💻', '⚙️', '🔧', '🔨'],
    actions: ['Developed', 'Implemented', 'Optimized', 'Innovated'],
    metrics: ['code', 'systems', 'solutions', 'improvements']
  },
  {
    prefix: 'Community',
    icons: ['👥', '🤲', '🌟', '🎯'],
    actions: ['Supported', 'Built', 'Grew', 'Empowered'],
    metrics: ['help', 'growth', 'engagement', 'success']
  }
];

// Colors for badges
const colors = [
  { name: 'blue', primary: '#3B82F6', secondary: '#1D4ED8' },
  { name: 'purple', primary: '#8B5CF6', secondary: '#6D28D9' },
  { name: 'green', primary: '#10B981', secondary: '#059669' },
  { name: 'red', primary: '#EF4444', secondary: '#DC2626' },
  { name: 'yellow', primary: '#F59E0B', secondary: '#D97706' },
  { name: 'pink', primary: '#EC4899', secondary: '#DB2777' }
];

// Function to generate random date within the last year
function generateRandomDate() {
  const now = new Date();
  const pastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const timestamp = pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime());
  return new Date(timestamp);
}

// Function to generate SVG for a badge
function generateBadgeSVG(name, color) {
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="${color.secondary}" fill-opacity="0.1"/>
    <circle cx="24" cy="24" r="20" fill="${color.secondary}" fill-opacity="0.2"/>
    <circle cx="24" cy="24" r="16" fill="${color.primary}"/>
    <text x="24" y="24" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${name.charAt(0)}
    </text>
  </svg>`;
}

// Generate badges
async function generateBadges() {
  const badges = [];
  const svgDir = 'public/badges';
  
  // Create directories if they don't exist
  await fs.mkdir(svgDir, { recursive: true });

  // Generate 30 badges
  for (let i = 0; i < 30; i++) {
    const category = categories[Math.floor(i / 6)];
    const color = colors[i % colors.length];
    const action = category.actions[Math.floor(Math.random() * category.actions.length)];
    const metric = category.metrics[Math.floor(Math.random() * category.metrics.length)];
    
    const badge = {
      id: i + 1,
      name: `${category.prefix} ${action}`,
      description: `${action} outstanding ${metric} in the protocol`,
      type: category.prefix.toLowerCase(),
      color: color.name,
      icon: category.icons[Math.floor(Math.random() * category.icons.length)],
      earnedDate: generateRandomDate().toISOString(),
      svgPath: `/badges/badge-${i + 1}.svg`,
      rarity: Math.random() < 0.2 ? 'legendary' : Math.random() < 0.4 ? 'rare' : 'common',
      requirements: {
        metric: metric,
        threshold: Math.floor(Math.random() * 1000) + 100
      }
    };
    
    // Generate and save SVG
    const svg = generateBadgeSVG(badge.name, color);
    await fs.writeFile(`${svgDir}/badge-${i + 1}.svg`, svg);
    
    badges.push(badge);
  }

  // Generate badges.json
  const badgesConfig = {
    version: '1.0.0',
    lastUpdated: new Date().toISOString(),
    badges: badges
  };

  await fs.writeFile('public/badges/badges.json', JSON.stringify(badgesConfig, null, 2));

  console.log('Generated 30 badges with SVGs and configuration file');
  console.log('\nExample badge:');
  console.log(JSON.stringify(badges[0], null, 2));
}

// Run the generator
generateBadges().catch(console.error);