import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();
export const toBoolean = (secure) => String(secure).toLowerCase() === "true";
export const envVariablesSchema = z.object({
    PORT: z.preprocess(Number, z.number()),
    JWT_SECRET: z.string(),
    DATABASE_URL: z.string(),
    COOKIE_SECURE: z.preprocess(toBoolean, z.boolean()),
    COOKIE_HTTP_ONLY: z.preprocess(toBoolean, z.boolean()),
    COOKIE_SAME_SITE: z.preprocess(toBoolean, z.boolean()),
    AUTH_USERNAME: z.string(),
    AUTH_PASSWORD: z.string(),
});
export const envVariables = envVariablesSchema.parse(process.env);
export default envVariables;
//# sourceMappingURL=variables.js.map