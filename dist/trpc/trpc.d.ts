import { OpenApiMeta } from "trpc-openapi";
export declare const jwtSecret: string;
export declare const trpc: {
    _config: import("@trpc/server/unstable-core-do-not-import").RootConfig<{
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            user: import("../plugins/jwt.js").User;
        };
        meta: OpenApiMeta;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: true;
    }>;
    procedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        user: import("../plugins/jwt.js").User;
    }, OpenApiMeta, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
    middleware: <$ContextOverrides>(fn: import("@trpc/server/unstable-core-do-not-import").MiddlewareFunction<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        user: import("../plugins/jwt.js").User;
    }, OpenApiMeta, object, $ContextOverrides, unknown>) => import("@trpc/server/unstable-core-do-not-import").MiddlewareBuilder<{
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        user: import("../plugins/jwt.js").User;
    }, OpenApiMeta, $ContextOverrides, unknown>;
    router: {
        <TInput extends import("@trpc/server").RouterRecord>(input: TInput): import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
            ctx: {
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                user: import("../plugins/jwt.js").User;
            };
            meta: OpenApiMeta;
            errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
            transformer: true;
        }, TInput>;
        <TInput_1 extends import("@trpc/server/unstable-core-do-not-import").CreateRouterOptions>(input: TInput_1): import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
            ctx: {
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
                user: import("../plugins/jwt.js").User;
            };
            meta: OpenApiMeta;
            errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
            transformer: true;
        }, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<TInput_1>>;
    };
    mergeRouters: typeof import("@trpc/server/unstable-core-do-not-import").mergeRouters;
    createCallerFactory: <TRecord extends import("@trpc/server").RouterRecord>(router: Pick<import("@trpc/server/unstable-core-do-not-import").Router<{
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            user: import("../plugins/jwt.js").User;
        };
        meta: OpenApiMeta;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: true;
    }, TRecord>, "_def">) => import("@trpc/server/unstable-core-do-not-import").RouterCaller<{
        ctx: {
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            user: import("../plugins/jwt.js").User;
        };
        meta: OpenApiMeta;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: true;
    }, TRecord>;
};
export type TRPC = typeof trpc;
