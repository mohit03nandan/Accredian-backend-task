"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("./routes/User"));
const Todo_1 = __importDefault(require("./routes/Todo"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', User_1.default);
app.use('/todo', Todo_1.default);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`);
});
