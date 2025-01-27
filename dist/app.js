import AutoLoad from "@fastify/autoload";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fastifyTRPCPlugin, } from "@trpc/server/adapters/fastify";
import { dirname, join } from "path";
import { fastifyTRPCOpenApiPlugin } from "trpc-openapi";
import { fileURLToPath } from "url";
import { openApiDocument } from "./open-api.js";
import { createContext } from "./trpc/context.js";
import { appRouter } from "./trpc/router.js";
const options = {};
const app = async (fastify, opts) => {
    await fastify.register(cors, {
        origin: "*",
    });
    void fastify.register(AutoLoad, {
        dir: join(dirname(fileURLToPath(import.meta.url)), "plugins"),
        options: opts,
    });
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
                console.error(`Error in tRPC handler on path '${path}':`, error);
            },
        },
    });
    fastify.register(fastifyTRPCOpenApiPlugin, {
        basePath: "/api",
        router: appRouter,
        createContext,
    });
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
//# sourceMappingURL=app.js.map