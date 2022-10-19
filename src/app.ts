import fastify, { FastifyServerOptions } from "fastify";

const app = (opts: FastifyServerOptions = {}) => {
    const server = fastify(opts);
    server.get('/', async(req,res)=> 'Welcome to Fastify app');
    return server;
}

export default app;