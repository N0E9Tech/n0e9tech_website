import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        // Add custom breakpoints for large displays
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        // Custom max-width values for better large screen support
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
        '10xl': '120rem', // 1920px
      },
      fontSize: {
        // Enhanced font sizes for large displays
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        // Additional spacing values for large layouts
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
  },
};

export default config;
