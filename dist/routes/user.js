"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_1.getUsers);
userRouter.get('/:id', user_1.getUser);
userRouter.post('/', user_1.postUser);
userRouter.put('/:id', user_1.putUser);
userRouter.delete('/:id', user_1.deleteUser);
exports.default = userRouter;
