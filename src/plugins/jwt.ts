import cookie from "@fastify/cookie";
import jwt, { type FastifyJWTOptions } from "@fastify/jwt";
import { FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { envVariables } from "../environment/variables.js";

export type Payload = {
  username: string;
  password: string | null;
};

export type User = {
  username: string;
};

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: Payload; // payload type is used for signing and verifying
    user: User; // user type is return type of `request.user` object
  }
}

export default fp<FastifyJWTOptions>(async (fastify, opts) => {
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

  fastify.decorateRequest("authenticate", async (req: FastifyRequest) => {
    await req.jwtVerify();
    await req.jwtVerify({ onlyCookie: true });
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export interface FastifyRequest {
    authenticate: (req: FastifyRequest) => Promise<void>;
  }
}
