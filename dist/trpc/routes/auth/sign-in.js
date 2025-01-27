import { TRPCError } from "@trpc/server";
import { z } from "zod";
import env from "../../../environment/variables.js";
import { publicProcedure } from "../../procedures/public.js";
export const signIn = publicProcedure
    .meta({
    openapi: {
        example: {
            request: {
                password: "mithun",
                username: "mithun",
            },
        },
        method: "POST",
        path: "/auth/sign-in",
        summary: "Sign in an application user",
        tags: ["auth"],
    },
})
    .input(z.object({
    userName: z.string(),
    password: z.string(),
}))
    .output(z.object({
    user: z.object({
        ID: z.number(),
        Email: z.string(),
        Username: z.string(),
        role: z.string(),
    }),
    token: z.string(),
}))
    .mutation(async ({ input, ctx }) => {
    try {
        const storedUsername = env.AUTH_USERNAME;
        const storedPassword = env.AUTH_PASSWORD;
        if (input.userName !== storedUsername ||
            input.password !== storedPassword) {
            throw new TRPCError({
                code: "UNAUTHORIZED",
                message: "Invalid credentials",
            });
        }
        const user = {
            ID: 1,
            Email: "user@example.com",
            Username: storedUsername,
            role: "Admin",
        };
        const token = await ctx.res.jwtSign({
            password: env.AUTH_PASSWORD,
            username: env.AUTH_USERNAME,
        }, { expiresIn: "20m" });
        const refreshToken = await ctx.res.jwtSign({
            password: env.AUTH_PASSWORD,
            username: env.AUTH_USERNAME,
        }, { expiresIn: "20m" });
        ctx.res.setCookie("refreshToken", refreshToken, {
            path: "/",
            secure: env.COOKIE_SECURE,
            httpOnly: env.COOKIE_HTTP_ONLY,
            sameSite: env.COOKIE_SAME_SITE,
        });
        return { user, token };
    }
    catch (error) {
        console.error("Error:", error);
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Authentication failed",
        });
    }
});
//# sourceMappingURL=sign-in.js.map