import jwt from "@fastify/jwt";
export type Payload = {
    username: string;
    password: string | null;
};
export type User = {
    username: string;
};
declare module "@fastify/jwt" {
    interface FastifyJWT {
        payload: Payload;
        user: User;
    }
}
declare const _default: import("fastify").FastifyPluginCallback<jwt.FastifyJWTOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault, import("fastify").FastifyBaseLogger>;
export default _default;
declare module "fastify" {
    interface FastifyRequest {
        authenticate: (req: FastifyRequest) => Promise<void>;
    }
}
