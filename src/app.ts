import fastify, { FastifyServerOptions } from "fastify";

const app = (opts: FastifyServerOptions = {}) => {
    const server = fastify(opts);
    server.get('/', async(req,res)=> 'Welcome to Fastify app');
    server.get('*',async (req, res) => 'Page not found')
    return server;
}

export default app;