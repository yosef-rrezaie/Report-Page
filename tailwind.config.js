module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        xs2: "470px", 
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-xl": { max: "1248px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs2": { max: "469px" }, 
      },
    },
  },
  plugins: [],
};
