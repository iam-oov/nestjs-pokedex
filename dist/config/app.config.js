"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 5,
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=app.config.js.map