"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserValidation_1 = __importDefault(require("../middleware/UserValidation"));
const userRouter = express_1.default.Router();
userRouter.post('/', (req, res) => {
    try {
        const data = req.body;
        console.log("data", data);
        const result = UserValidation_1.default.safeParse(data);
        if (result.success) {
            res.status(200).send({ Message: "Success!" });
        }
        else {
            res.status(400).send({ message: "Invalid parameters" });
        }
    }
    catch (error) {
        res.send(error);
    }
});
exports.default = userRouter;
