import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import envVariables from "../environment/variables.js";
import { Context } from "./context.js";
import superjson from "superjson";

export const jwtSecret = envVariables.JWT_SECRET;

export const trpc = initTRPC
  .context<Context>()
  .meta<OpenApiMeta>()
  .create({
    transformer: superjson,
    errorFormatter: ({ error, shape }) => {
      if (
        error.code === "INTERNAL_SERVER_ERROR" &&
        process.env.NODE_ENV === "production"
      ) {
        return { ...shape, message: "Internal server error" };
      }
      return shape;
    },
  });

export type TRPC = typeof trpc;
