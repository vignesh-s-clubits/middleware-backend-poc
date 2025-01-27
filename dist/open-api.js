import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "./trpc/router.js";
export const openApiDocument = generateOpenApiDocument(appRouter, {
    title: "Example CRUD API",
    description: "OpenAPI compliant REST API built using tRPC with Fastify",
    version: "1.0.0",
    baseUrl: "/api",
    docsUrl: "https://github.com/jlalmes/trpc-openapi",
    tags: [],
});
//# sourceMappingURL=open-api.js.map