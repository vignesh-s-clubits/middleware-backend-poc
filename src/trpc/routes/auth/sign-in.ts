import { TRPCError } from "@trpc/server";
import { z } from "zod";
import env from "../../../environment/variables.js"; // Assuming your env file is set up to export environment variables
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
  .input(
    z.object({
      userName: z.string(),
      password: z.string(),
    })
  )
  .output(
    z.object({
      user: z.object({
        ID: z.number(),
        Email: z.string(),
        Username: z.string(),
        role: z.string(),
      }),
      token: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    try {
      // Load credentials from the environment variables
      const storedUsername = env.AUTH_USERNAME; // Replace with your actual variable name
      const storedPassword = env.AUTH_PASSWORD; // Replace with your actual variable name

      // Compare input with stored credentials
      if (
        input.userName !== storedUsername ||
        input.password !== storedPassword
      ) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      // Simulated user information for the response
      const user = {
        ID: 1, // Replace with your actual user ID logic
        Email: "user@example.com", // Replace with actual email
        Username: storedUsername,
        role: "Admin", // Adjust based on your logic
      };

      // Generate JWT tokens
      const token = await ctx.res.jwtSign(
        {
          password: env.AUTH_PASSWORD,
          username: env.AUTH_USERNAME,
        },
        { expiresIn: "20m" } // Expires in 20 minutes
      );

      const refreshToken = await ctx.res.jwtSign(
        {
          password: env.AUTH_PASSWORD,
          username: env.AUTH_USERNAME,
        },
        { expiresIn: "20m" } // Expires in 20 minutes
      );
      // Set refresh token as an HTTP-only cookie
      ctx.res.setCookie("refreshToken", refreshToken, {
        path: "/",
        secure: env.COOKIE_SECURE,
        httpOnly: env.COOKIE_HTTP_ONLY,
        sameSite: env.COOKIE_SAME_SITE,
      });

      return { user, token };
    } catch (error) {
      console.error("Error:", error);
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Authentication failed",
      });
    }
  });
