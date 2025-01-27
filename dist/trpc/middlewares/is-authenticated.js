import { TRPCError } from "@trpc/server";
import { getErrorMessage } from "../../utils/get-error-message.js";
export const isAuthenticated = (trpc) => trpc.middleware(async ({ ctx, next }) => {
    try {
        await ctx.req.authenticate(ctx.req);
        return next({
            ...ctx,
            ctx: {
                user: ctx.req.user,
            },
        });
    }
    catch (error) {
        console.log(getErrorMessage(error));
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }
});
//# sourceMappingURL=is-authenticated.js.map