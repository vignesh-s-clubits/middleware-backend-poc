import fp from "fastify-plugin";
import {
  FastifyPluginAsyncZod,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

// eslint-disable-next-line require-await
export default fp<FastifyPluginAsyncZod>(async (fastify) => {
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);
});
