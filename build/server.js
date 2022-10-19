"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = (0, app_1.default)({
    logger: true,
    pluginTimeout: 20000,
});
server.listen({ port: 3000, host: 'localhost' }, (err, address) => {
    if (err) {
        server.log.error(err);
        return process.exit(1);
    }
    console.log(`Server started on port : 3000\n`);
});
