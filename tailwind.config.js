/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        card_neo: 'linear-gradient(145deg, #fbffff, #f0f5ff)',
      },
      colors: {
        mainClr: '#f0f5ff',
      },
      boxShadow: {
        neumorph: '5px 5px 7px #a5aeb3, -5px -5px 7px #ffffff',
        inset_neu: 'inset 5px 5px 3px #d4dfe6, inset -5px -5px 3px #ffffff,  -4px -4px 5px #ffffff',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

// chatGPT pada content : './node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}'
