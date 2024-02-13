import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-navy': '#020c1b',
      'navy': '#0a192f',
      'light-navy': '#112240',
      'lightest-navy': '#233554',
      'navy-tint': '#020c1bb3',
      'dark-slate': '#495670',
      'slate': '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6ff',
      'white': '#e6f1ff',
      'green': '#64ffda',
      'green-tint': '#64ffda1a',
      'pink': '#f57dff',
      'blue': '#57cbff',
    },
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
        ...defaultTheme.screens,
      },
      keyframes: {
        drop: {
          'from': {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          'to': {
            opacity: '0.8',
            transform: 'translate(0px)'
          }
        },
        jump: {
          '0%': {
            transform: 'translateY(-200px)'
          },
          '50%': {
            transform: 'translateY(0px)'
          },
          '80%': {
            transform: 'translateY(-20px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        'drop': 'drop 1s ease backwards',
        'jump': 'jump 1s ease-in forwards'
      }
    },
  },
  plugins: [],
};
export default config;
