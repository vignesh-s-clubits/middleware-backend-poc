import { TRPCError } from "@trpc/server";
import { getErrorMessage } from "../../utils/get-error-message.js";
import type { TRPC } from "../trpc.js";

export const isAuthenticated = (trpc: TRPC) =>
  trpc.middleware(async ({ ctx, next }) => {
    try {
      await ctx.req.authenticate(ctx.req);

      return next({
        ...ctx,
        ctx: {
          user: ctx.req.user,
          // userId: ctx.req.user.id,
          // role: ctx.req.user.role,
        },
      });
    } catch (error) {
      console.log(getErrorMessage(error));

      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
  });
