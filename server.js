import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes";
import config from "./config";
import apiRouter from "./routes"

const app = express();

app.use(express.json());

app.use("/api/v1", apiRouter);

/**
 * Error handler middleware
 */
app.use(errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(config.port || 5000, () =>
  console.log(`Server listening on port ${config.port}...`)
);
