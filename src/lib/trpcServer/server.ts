import { createRouter } from "./router";
import { router as helloRouter } from "./hello";

export const router = createRouter()
  // queries and mutations...
  .merge("hello.", helloRouter);

export type Router = typeof router;
