import express from "express";
import cors from "cors";
import { Read, Wirite } from "./handle";


const app=express();
app.use(express.json());
app.use(cors());
app.use('/read',Read);
app.use("/write",Wirite);

export const viteNodeApp=app;