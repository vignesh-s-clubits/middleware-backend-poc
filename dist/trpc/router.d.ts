import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        user: import("../plugins/jwt.js").User;
    };
    meta: import("trpc-openapi").OpenApiMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: true;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    auth: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            user: import("../plugins/jwt.js").User;
        };
        meta: import("trpc-openapi").OpenApiMeta;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: true;
    }, {
        signIn: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
            input: {
                password: string;
                userName: string;
            };
            output: {
                user: {
                    ID: number;
                    Email: string;
                    Username: string;
                    role: string;
                };
                token: string;
            };
        }>;
        signOut: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
            input: void;
            output: never;
        }>;
    }>;
}>>;
export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
