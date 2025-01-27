import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  return {
    req,
    res,
    user: req.user,
    // userId: req.user?.id,
    // role: req.user?.role,
  };
};

export type Context = ReturnType<typeof createContext>;
