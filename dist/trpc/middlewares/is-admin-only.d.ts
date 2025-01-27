import type { TRPC } from "../trpc.js";
export declare const isAdminOnly: (trpc: TRPC) => import("@trpc/server/unstable-core-do-not-import").MiddlewareBuilder<{
    req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
    res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    user: import("../../plugins/jwt.js").User;
}, import("trpc-openapi").OpenApiMeta, {
    role: string;
}, unknown>;
