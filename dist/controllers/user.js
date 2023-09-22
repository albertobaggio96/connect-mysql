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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const connection_1 = __importDefault(require("../db/connection"));
// to get all users
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows] = yield connection_1.default.query('SELECT * FROM user');
        yield res.json({
            msg: 'getUsers',
            rows
        });
    });
}
exports.getUsers = getUsers;
// to get one user
function getUser(req, res) {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
}
exports.getUser = getUser;
// to add one user
function postUser(req, res) {
    const { body } = req;
    console.log(body);
    res.json({
        msg: 'postUser',
        body
    });
}
exports.postUser = postUser;
// to update a user
function putUser(req, res) {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        id,
        body
    });
}
exports.putUser = putUser;
// to delete a user
function deleteUser(req, res) {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
}
exports.deleteUser = deleteUser;
