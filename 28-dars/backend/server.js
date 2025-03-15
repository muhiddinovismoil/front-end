import express from "express";
import mongoose from "mongoose";
import { devConfig } from "./src/config/index.js";
import { todoRouter } from "./src/routes/todo.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", todoRouter);

app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message);
    }
    return res.send("Not found");
});
app.listen(devConfig.API_PORT, () => {
    console.info(`SERVER IS RUNNING ON PORT: ${devConfig.API_PORT}`);
    console.info(`Database connection successfull: ${devConfig.MONGO_URI}`);
    mongoose.connect(devConfig.MONGO_URI);
});
