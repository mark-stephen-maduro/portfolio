/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#f0ebe0',
        signal: '#ff2d00',
        void:   '#060606',
        muted:  '#8a8070',
      },
      fontFamily: {
        bebas:  ['"Bebas Neue"',       'sans-serif'],
        mono:   ['"Space Mono"',       'monospace'],
      },
      fontSize: {
        'hero':       ['clamp(4.5rem,16vw,18rem)',  { lineHeight: '0.85', letterSpacing: '-0.01em' }],
        'manifesto':  ['clamp(3.5rem,11vw,13rem)',  { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'lead':       ['clamp(1.4rem,4vw,3.5rem)',  { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'statement':  ['clamp(4rem,9vw,13rem)',      { lineHeight: '0.88', letterSpacing: '-0.01em' }],
        'contact-xl': ['clamp(4rem,14vw,16rem)',    { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'stat':       ['clamp(2.5rem,5vw,5rem)',    { lineHeight: '1' }],
        'card-title': ['clamp(2rem,4vw,3.5rem)',    { lineHeight: '0.9' }],
        'loader':     ['clamp(2rem,6vw,5rem)',      { lineHeight: '1' }],
        'role':       ['clamp(0.9rem,2vw,1.25rem)', { letterSpacing: '0.2em' }],
        'email':      ['clamp(1.2rem,3vw,2rem)',    {}],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
