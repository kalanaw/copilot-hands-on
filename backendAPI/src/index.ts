import express, { Request, Response } from "express";
import { appInitialize } from "./initialize";

export const port = 3000 || process.env.PORT;

export default (()=>{
  const app = appInitialize();
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
})()



