import { Router } from "express";

export const helloRoute = () =>
  Router().get("/hello", (req, res) => {
    res.json({ message: "Hello World!" });
  });
