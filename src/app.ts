import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  FastifyTRPCPluginOptions,
  fastifyTRPCPlugin,
} from "@trpc/server/adapters/fastify";
import { FastifyPluginAsync, FastifyServerOptions } from "fastify";
import { dirname, join } from "path";
import { fastifyTRPCOpenApiPlugin } from "trpc-openapi";
import { fileURLToPath } from "url";
import { openApiDocument } from "./open-api.js";
import { createContext } from "./trpc/context.js";
import { appRouter, type AppRouter } from "./trpc/router.js";

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  await fastify.register(cors, {
    origin: "*",
  });

  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(dirname(fileURLToPath(import.meta.url)), "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(dirname(fileURLToPath(import.meta.url)), "routes"),
    options: opts,
  });

  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ path, error }) {
        // report to error monitoring
        console.error(`Error in tRPC handler on path '${path}':`, error);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  });

  fastify.register(fastifyTRPCOpenApiPlugin, {
    basePath: "/api",
    router: appRouter,
    createContext,
  } as any);

  // Server Swagger UI
  fastify.register(fastifySwagger, {
    mode: "static",
    specification: { document: openApiDocument },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: "/docs",
    uiConfig: { displayOperationId: true },
  });
};

export default app;
export { app, options };
