import express from "express";
import { appInitialize } from "../initialize";
import { helloRoute } from "../routes/hello";
import { meetingRoomAvailabilityRoute } from "../routes/meetingRoomAvailability";

describe("index -> InitializeApp", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should initialize app with routes", () => {
    const use = jest.fn();
    const app = { use } as any;
    const result = appInitialize({ app });
    expect(JSON.stringify(use.mock.calls)).toEqual(
      JSON.stringify([
        [express.json()],
        [express.urlencoded({ extended: true })],
        [helloRoute()],
        [meetingRoomAvailabilityRoute()],
      ])
    );
  });
});
