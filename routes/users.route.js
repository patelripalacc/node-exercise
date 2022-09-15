import express from "express";
import * as users from "../controllers/user.controller";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let userList = await users.findAll();
    res.json(userList);
  } catch (e) {
    next(e);
  }
});

export default router;
