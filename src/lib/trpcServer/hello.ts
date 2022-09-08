import { createRouter } from "./router";

export const router = createRouter().query("world", {
  resolve: () => "world"
});
