import { defineConfig } from "vite";

export default defineConfig({
  base: "/spqe-lab/",
  test: {
    environment: "jsdom",
  },
});
