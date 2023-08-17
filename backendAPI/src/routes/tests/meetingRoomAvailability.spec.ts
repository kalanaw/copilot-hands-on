import { getMeetingRoomAvailabilityImplementation } from "../meetingRoomAvailability";
import * as meetingRoomApi from "../../meetingRoomData";
jest.mock("../../meetingRoomData");
// stop console logs
console.log = jest.fn();

describe("routes -> meetingRoomAvailability", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Test for availability of meeting rooms given a day/time where the meeting room is available", async () => {
    const spyJson = jest.fn();
    const spyRes = { json: spyJson };
    const spyReq = {
      params: {
        epochTimeStamp: "1609459200",
        duration: "60",
      },
    };
    // mock fetchMeetingRoomData
    const mockDatMeetingRoomData = [
      {
        id: 1,
        name: "Room 1",
        date: "2021-01-01",
        bookedTimes: [
          {
            startTime: "2021-01-01T09:00:00.000Z",
            endTime: "2021-01-01T10:00:00.000Z",
          },
          {
            startTime: "2021-01-01T11:00:00.000Z",
            endTime: "2021-01-01T12:00:00.000Z",
          },
        ],
      },
    ];
    jest
      .spyOn(meetingRoomApi, "fetchMeetingRoomData")
      .mockResolvedValue(mockDatMeetingRoomData);

    await getMeetingRoomAvailabilityImplementation(
      spyReq,
      spyRes
    );
    expect(spyJson).toHaveBeenCalledWith({
      availableMeetingRooms: mockDatMeetingRoomData,
    });
  });
});
