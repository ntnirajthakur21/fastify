import app from "./app";

const server = app({
    logger: true,
    pluginTimeout: 20000,
})

server.listen({ port: 3000, host: 'localhost'}, (err, address)=>{
    if(err){
        server.log.error(err);
        return process.exit(1);
    }
    console.log(`Server started on port : 3000\n`);
})