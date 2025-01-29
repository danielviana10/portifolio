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
        'navbar-bg': '#30333A',
        'greenCustom': '#07E78F',
        'greyCostum': 'var(--background)'
      },
    },
  },
  plugins: [],
} satisfies Config;
