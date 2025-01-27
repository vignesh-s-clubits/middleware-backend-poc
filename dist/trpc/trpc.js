import { initTRPC } from "@trpc/server";
import envVariables from "../environment/variables.js";
import superjson from "superjson";
export const jwtSecret = envVariables.JWT_SECRET;
export const trpc = initTRPC
    .context()
    .meta()
    .create({
    transformer: superjson,
    errorFormatter: ({ error, shape }) => {
        if (error.code === "INTERNAL_SERVER_ERROR" &&
            process.env.NODE_ENV === "production") {
            return { ...shape, message: "Internal server error" };
        }
        return shape;
    },
});
//# sourceMappingURL=trpc.js.map