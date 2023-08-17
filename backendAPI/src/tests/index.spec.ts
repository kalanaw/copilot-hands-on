import express from "express";
import { appInitialize } from "../index";
import { helloRoute } from "../routes/hello";

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
      ])
    );
  });
});
