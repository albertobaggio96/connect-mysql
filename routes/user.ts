import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/user";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', postUser);
userRouter.put('/:id', putUser);
userRouter.delete('/:id', deleteUser);

export default userRouter