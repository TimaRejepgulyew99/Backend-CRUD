import { Router } from "express";

import {
  create,
  deletePost,
  getAll,
  getById,
  update,
} from "../repository/post.js";
export default () => {
  const router = Router();

  router.get("/", async (req, res) => {
    const allPost = await getAll(10);
    res.send(allPost).status(200);
  });
  router.get("/:id", async (req, res) => {
    const post = await getById(req.params.id);
    res.send(post).status(200);
  });
  router.post("/create", async (req, res) => {
    const post = await create(req.body);
    res.send(post).status(200);
  });
  router.put("/:id", async (req, res) => {
    const post = await update(req.body);
    res.send(post).status(200);
  });
  router.delete("/:id", async (req, res) => {
    const post = await deletePost(req.params.id);
    res.send(post).status(200);
  });
  return router;
};
