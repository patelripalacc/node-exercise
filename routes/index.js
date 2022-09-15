import express from "express";
import usersRouter from "./users.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

router.use("/users", usersRouter);

export default router;
