import { PrismaClient } from "@prisma/client";
import env from "../environment/variables.js";
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: env.DATABASE_URL,
        },
    },
});
//# sourceMappingURL=prisma.js.map