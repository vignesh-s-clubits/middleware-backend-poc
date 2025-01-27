import { trpc } from "../trpc.js";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import { isAdminOnly } from "../middlewares/is-admin-only.js";

export const adminOnlyProcedure = trpc.procedure
  .use(isAuthenticated(trpc))
  .use(isAdminOnly(trpc));
