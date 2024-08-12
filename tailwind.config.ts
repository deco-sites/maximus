import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    container: { center: true },
    extend: {
      screens: {
        "xxl": "1400px",
      },
    }
  },
};
