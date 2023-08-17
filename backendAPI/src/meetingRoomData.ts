export const fetchMeetingRoomData = ({ date }: { date: string }) =>
  // simulates a fetch from a database
  Promise.resolve([
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
        {
          startTime: "2021-01-01T13:00:00.000Z",
          endTime: "2021-01-01T14:00:00.000Z",
        },
        {
          startTime: "2021-01-01T15:00:00.000Z",
          endTime: "2021-01-01T16:00:00.000Z",
        },
      ],
    },
    {
      id: 2,
      name: "Room 2",
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
        {
          startTime: "2021-01-01T13:00:00.000Z",
          endTime: "2021-01-01T14:00:00.000Z",
        },
      ],
    },
  ]);