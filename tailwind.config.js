module.exports = {
  theme: {
    extend: {
      keyframes: {
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "spin-3d": "rotate-3d 8s linear infinite",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
