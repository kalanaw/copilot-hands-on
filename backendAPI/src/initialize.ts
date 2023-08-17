import express, { Request, Response } from "express";
import { helloRoute } from "./routes/hello";
import { meetingRoomAvailabilityRoute } from "./routes/meetingRoomAvailability";

export const port = 3000 || process.env.PORT;

export const appInitialize = ({ app = express() } = {}) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helloRoute());
  app.use(meetingRoomAvailabilityRoute());

    return app;
};