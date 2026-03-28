export const PROJECTS = [
  {
    index: '01',
    title: 'Karmabunny',
    role: 'Frontend Engineer',
    year: '2026–Now',
    desc: 'Building and maintaining websites and web applications for a web design company using Craft CMS, Twig, React, and Shopify — across a diverse portfolio of brands and industries.',
    tags: ['Craft CMS', 'Twig', 'React', 'Shopify', 'JavaScript'],
    color: '#b85c00',  // burnt orange
  },
  {
    index: '02',
    title: 'OWC E-Commerce',
    role: 'Frontend Web Developer',
    year: '2022–2026',
    desc: 'Maintained and scaled the company website and e-commerce platform for Other World Computing using Craft CMS and Twig.',
    tags: ['JavaScript', 'React', 'Craft CMS', 'Twig', 'E-Commerce'],
    color: '#0a3060',  // deep blue
  },
  {
    index: '03',
    title: 'InvestPro Realty',
    role: 'Full-Stack Developer',
    year: '2024–2025',
    desc: 'Built real estate listing websites and a Shopify storefront for a realty company — property search, listings, and commerce under one brand.',
    tags: ['React', 'Node.js', 'Shopify', 'JavaScript'],
    color: '#8c1515',  // deep red
  },
  {
    index: '04',
    title: 'Music School Platform',
    role: 'Full-Stack Developer',
    year: '2021–2022',
    desc: 'Built an informational and booking platform for a Singapore music school with live class integration.',
    tags: ['React', 'TypeScript', 'Node.js'],
    color: '#2a1040',  // deep purple
  },
  {
    index: '05',
    title: 'Honda Philippines',
    role: 'Frontend Developer',
    year: '2021–2022',
    desc: 'Developed key sections of the official Honda Philippines informational website, focusing on performance and brand fidelity.',
    tags: ['React.js', 'TypeScript', 'Node.js'],
    color: '#5c0a0a',  // dark maroon
  },
  {
    index: '06',
    title: 'Zizon Solutions',
    role: 'Frontend Developer',
    year: '2021–2022',
    desc: 'Built a variety of client websites for a web design company — spanning WordPress builds and Shopify storefronts across multiple industries.',
    tags: ['WordPress', 'Shopify', 'JavaScript', 'HTML/CSS'],
    color: '#0a1a2a',  // dark teal-navy
  },
  {
    index: '07',
    title: 'B2B ERP Suite',
    role: 'Software Engineer',
    year: '2019–2021',
    desc: 'Designed and engineered a complete B2B ERP — design system, inventory, procurement, sales, billing, and identity management.',
    tags: ['Design System', 'Full-Stack', 'IAM', 'Enterprise'],
    color: '#111827',  // slate dark
  },
]

export const STACK = [
  { label: 'Frontend',       items: ['React.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'HTML/CSS/SCSS'] },
  { label: 'Backend',        items: ['Node.js', 'Express.js', 'C#', 'Java', 'MySQL', 'NoSQL', 'Couchbase'] },
  { label: 'Infrastructure', items: ['Docker', 'NGINX', 'Git', 'Linux'] },
  { label: 'CMS / Commerce', items: ['Craft CMS', 'Twig', 'WordPress', 'Shopify'] },
  { label: 'Design',         items: ['Adobe XD', 'Photoshop', 'Illustrator'] },
]

export const STATS = [
  ['6+',        'Years Experience'],
  ['15+',       'Projects Shipped'],
  ['PH · SG · US · AU · JP', 'Markets Served'],
]

export const NAV_LINKS = [
  ['work',    'Work'],
  ['stack',   'Stack'],
  ['contact', 'Contact'],
]

export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/mark-stephen-maduro' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-stephen-maduro' },
]

export const SKILLS_MARQUEE = [
  'React.js', '·', 'TypeScript', '·', 'Node.js', '·', 'Vue.js', '·',
  'Nuxt.js',  '·', 'Express.js', '·', 'MySQL',   '·', 'Docker', '·',
  'Craft CMS','·', 'Shopify',    '·', 'C#',       '·', 'NGINX',  '·',
]

export const RIGHT_NOW_CELLS = [
  { label: 'Location',       value: 'Manila, Philippines',      mono: false },
  { label: 'Local Time',     value: null,                       mono: true  }, // injected at runtime
  { label: 'Role',           value: 'Full-Stack Engineer',      mono: false },
  { label: 'Currently',      value: 'Fully Employed',            mono: false },
  { label: 'Status',         value: '● Available for Freelance',mono: true, signal: true },
  { label: 'Experience',     value: '6+ Years',                 mono: false },
  { label: 'Focus',          value: 'React · Node · TypeScript',mono: true  },
  { label: 'Education',      value: 'BS IT',       mono: false },
]
