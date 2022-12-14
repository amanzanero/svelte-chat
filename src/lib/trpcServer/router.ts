import type { inferAsyncReturnType } from "@trpc/server";
import * as trpc from "@trpc/server";

// optional
export const createContext = () => {
  // ...
  return {
    /** context data */
  };
};

// optional
export const responseMeta = () => {
  // ...
  return {
    // { headers: ... }
  };
};

export const createRouter = () => {
  return trpc.router<inferAsyncReturnType<typeof createContext>>();
};
