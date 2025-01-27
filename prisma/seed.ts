import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { v4 as uuid } from "uuid";

dotenv.config();

export const envVariablesSchema = z.object({
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string(),
});

declare global {
  export namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof envVariablesSchema> {}
  }
}

export const envVariables = envVariablesSchema.parse(process.env);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVariables.DATABASE_URL,
    },
  },
});

const main = async () => {
  const token = jwt.sign(
    {
      id: uuid(),
      name: "ramco-equal-user",
    },
    envVariables.JWT_SECRET
  );

  console.log({ token });
};

main()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
