/** @type {import('tailwindcss').Config} */
{/*module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/}

//module.exports = {
 // content: [
   // './pages/**/*.{html,js}',
   // './components/**/*.{html,js}',
 // ],
  // ...
//}

//module.exports = {
  //content: [
   // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    //'./components/**/*.{js,ts,jsx,tsx,mdx}',
    //'./app/**/*.{js,ts,jsx,tsx,css}',
  //],
  //theme: {
  //extend: {},
  //},
  //plugins: [],
//};


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Ensure dark mode uses the class strategy
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        cardForeground: 'var(--card-foreground)',
        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondaryForeground: 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        mutedForeground: 'var(--muted-foreground)',
        accent: 'var(--accent)',
        accentForeground: 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        destructiveForeground: 'var(--destructive-foreground)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
};


