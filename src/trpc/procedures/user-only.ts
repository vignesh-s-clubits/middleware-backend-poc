import { trpc } from "../trpc.js";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import { isUserOnly } from "../middlewares/is-user-only.js";

export const adminOnlyProcedure = trpc.procedure
  .use(isAuthenticated(trpc))
  .use(isUserOnly(trpc));
