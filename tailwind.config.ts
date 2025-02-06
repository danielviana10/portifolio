import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbarBg': 'var(--greyCustom)',
        'greenCustom': 'var(--greenCustom)',
        'greyCustom': 'var(--background)',
        'iconCustom': 'var(--blackCustmo2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
