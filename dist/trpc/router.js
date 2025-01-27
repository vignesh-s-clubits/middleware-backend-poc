import { trpc } from "./trpc.js";
import { authRoutes } from "./routes/auth/index.js";
export const appRouter = trpc.router({
    auth: authRoutes,
});
//# sourceMappingURL=router.js.map