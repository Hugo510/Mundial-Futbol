import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New modern color palette
        blue: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bcd0ff",
          300: "#8eb0ff",
          400: "#5c85ff",
          500: "#3a5efd",
          600: "#2742f5",
          700: "#1f32e0",
          800: "#1e2cb5",
          900: "#1e2c8f",
          950: "#151a54",
        },
        purple: {
          50: "#f5f3ff",
          100: "#ede8ff",
          200: "#dcd5ff",
          300: "#c3b2ff",
          400: "#a683ff",
          500: "#8b55ff",
          600: "#7c33f5",
          700: "#6b21dd",
          800: "#581cb3",
          900: "#491a91",
          950: "#2e0e66",
        },
        pink: {
          50: "#fef1fa",
          100: "#fee5f7",
          200: "#ffcbf1",
          300: "#ffa1e4",
          400: "#ff70d2",
          500: "#fa3ab8",
          600: "#ea1897",
          700: "#c80d77",
          800: "#a40f61",
          900: "#861152",
          950: "#55022f",
        },
        orange: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc070",
          400: "#ff9a38",
          500: "#ff7c11",
          600: "#ff6005",
          700: "#cc4406",
          800: "#a1360d",
          900: "#82300f",
          950: "#461604",
        },
        teal: {
          50: "#edfcf7",
          100: "#d3f8ea",
          200: "#aaf0d8",
          300: "#73e2c2",
          400: "#39cda7",
          500: "#16b38e",
          600: "#0c9073",
          700: "#0c735e",
          800: "#0e5c4b",
          900: "#0f4b3e",
          950: "#052b23",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
