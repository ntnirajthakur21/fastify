import app from "./app";
require("dotenv").config();

const server = app({
    logger: true,
    pluginTimeout: 20000,
})

const start = async() => {
    try {
        const address = await server.listen({ port: parseInt(process.env.PORT!) || 3000, host: 'localhost'});
        console.log(`Server listening at address : ${address}`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}

start();