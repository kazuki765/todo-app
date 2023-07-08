import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: [
      { find: "@src/", replacement: `${__dirname}/src/` },
      { find: "@styled/", replacement: `${__dirname}/styled-system/` },
    ],
  },
});
