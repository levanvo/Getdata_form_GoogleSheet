import express from "express";
import cors from "cors";
import { go_3 } from "./handle";


const app=express();
app.use(express.json());
app.use(cors());

app.use("/",go_3);
export const viteNodeApp=app;