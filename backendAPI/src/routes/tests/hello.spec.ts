import express from "express";
import { helloRoute } from "../hello";

describe("routes -> hello", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Hello Route should return a json message", () => {
    const spyRoutes = jest.spyOn(express, "Router");
    const spyGet = jest.fn();
    const spyJson = jest.fn();
    const spyRes = { json: spyJson };
    const spyReq = {};

    spyRoutes.mockReturnValue({
      get: spyGet,
    } as any);
    spyGet.mockImplementation((path, callback) => {
      callback(spyReq, spyRes);
    });
    const result = helloRoute();
    expect(spyRoutes).toHaveBeenCalled();
    expect(spyGet).toHaveBeenCalledWith("/hello", expect.any(Function));
    expect(spyGet).toHaveBeenCalledTimes(1);
    expect(spyJson).toHaveBeenCalledWith({ message: "Hello World!" });
    expect(spyJson).toHaveBeenCalledTimes(1);
  });
});
