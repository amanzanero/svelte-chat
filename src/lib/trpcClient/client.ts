import * as trpc from "@trpc/client";
import type { Router } from "$lib/trpcServer/server"; // 👈 only the types are imported from the server

export default trpc.createTRPCClient<Router>({ url: "/trpc" });
