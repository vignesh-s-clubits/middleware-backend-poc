import cookie from "@fastify/cookie";
import jwt from "@fastify/jwt";
import fp from "fastify-plugin";
import { envVariables } from "../environment/variables.js";
export default fp(async (fastify, opts) => {
    fastify.register(cookie);
    fastify.register(jwt, {
        ...opts,
        secret: envVariables.JWT_SECRET,
        cookie: {
            cookieName: "refreshToken",
            signed: false,
        },
        sign: {
            expiresIn: "10m",
        },
        formatUser: (payload) => {
            return {
                username: payload.username,
            };
        },
    });
    fastify.decorateRequest("authenticate", async (req) => {
        await req.jwtVerify();
        await req.jwtVerify({ onlyCookie: true });
    });
});
//# sourceMappingURL=jwt.js.map