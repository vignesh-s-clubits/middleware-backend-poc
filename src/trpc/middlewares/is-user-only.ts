import type { TRPC } from "../trpc.js";

export const isUserOnly = (trpc: TRPC) =>
  trpc.middleware((opts) => {
    // const { ctx } = opts;

    // if (ctx.role !== "user") {
    //   throw new TRPCError({ code: "FORBIDDEN" });
    // }

    return opts.next({
      ctx: {
        role: "user",
      },
    });
  });
