import express, { Request, Response } from "express";
import { helloRoute } from "./routes/hello";



export const appInitialize = ({ app = express() } = {}) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helloRoute());
  return app;
};