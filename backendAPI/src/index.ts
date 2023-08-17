import express, { Request, Response } from "express";
import { helloRoute } from "./routes/hello";

export const port = 3000 || process.env.PORT;

export const appInitialize = ({ app = express() } = {}) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helloRoute());
  return app;
};

export default ()=>{
  const app = appInitialize();
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}



