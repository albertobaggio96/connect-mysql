import { Request, Response } from "express";
import db from "../db/connection";

// to get all users
export async function getUsers(req : Request, res: Response){

  const [rows] = await db.query('SELECT * FROM user')

  await res.json({
    msg: 'getUsers',
    rows
  });
}

// to get one user
export function getUser(req : Request, res: Response){

  const {id} = req.params;

  res.json({
    msg: 'getUser',
    id
  });
}

// to add one user
export function postUser(req : Request, res: Response){

  const {body} = req
  console.log(body)

  res.json({
    msg: 'postUser',
    body
  });
}

// to update a user
export function putUser(req : Request, res: Response){

  const {id} = req.params
  const {body} = req

  res.json({
    msg: 'putUser',
    id,
    body
  });
}

// to delete a user
export function deleteUser(req : Request, res: Response){

  const {id} = req.params

  res.json({
    msg: 'deleteUser',
    id
  });
}