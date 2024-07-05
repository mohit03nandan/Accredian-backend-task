"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserValidation_1 = __importDefault(require("../middleware/UserValidation"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userRouter = express_1.default.Router();
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = UserValidation_1.default.safeParse(data);
        if (result.success) {
            const newUser = yield prisma.user.create({
                data: {
                    username: result.data.username,
                    password: result.data.password,
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                }
            });
            console.log(newUser);
            res.status(201).send(newUser);
        }
        else {
            res.status(400).send({ message: "Invalid parameters" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
}));
exports.default = userRouter;
