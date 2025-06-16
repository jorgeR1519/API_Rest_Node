"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const labels_1 = __importDefault(require("../labels"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(labels_1.default.LISTEN_SERVER + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.model.js.map