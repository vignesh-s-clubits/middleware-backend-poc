import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { trpc } from "./trpc.js";
import { authRoutes } from "./routes/auth/index.js";

export const appRouter = trpc.router({
  auth: authRoutes,
});

export type AppRouter = typeof appRouter;

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
