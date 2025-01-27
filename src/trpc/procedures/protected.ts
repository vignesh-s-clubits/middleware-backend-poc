import { trpc } from "../trpc.js";
import { isAuthenticated } from "../middlewares/is-authenticated.js";

export const protectedProcedure = trpc.procedure.use(isAuthenticated(trpc));
